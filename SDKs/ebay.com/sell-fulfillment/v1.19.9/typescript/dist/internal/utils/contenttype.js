"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchContentType = void 0;
function matchContentType(contentType, pattern) {
    var res = false;
    contentType
        .split(";")
        .map(function (ctPart) {
        return ctPart.trim();
    })
        .forEach(function (ctPart) {
        if (ctPart === pattern || pattern === "*" || pattern === "*/*") {
            res = true;
            return;
        }
        if (ctPart === pattern) {
            res = true;
            return;
        }
        var parts = ctPart.split("/");
        if (parts.length === 2) {
            if ("".concat(parts[0], "/*") === pattern || "*/".concat(parts[1]) === pattern) {
                res = true;
                return;
            }
        }
    });
    return res;
}
exports.matchContentType = matchContentType;
