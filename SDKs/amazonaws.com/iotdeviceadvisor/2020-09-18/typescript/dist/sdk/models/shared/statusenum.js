"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusEnum = void 0;
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["Pass"] = "PASS";
    StatusEnum["Fail"] = "FAIL";
    StatusEnum["Canceled"] = "CANCELED";
    StatusEnum["Pending"] = "PENDING";
    StatusEnum["Running"] = "RUNNING";
    StatusEnum["Stopping"] = "STOPPING";
    StatusEnum["Stopped"] = "STOPPED";
    StatusEnum["PassWithWarnings"] = "PASS_WITH_WARNINGS";
    StatusEnum["Error"] = "ERROR";
})(StatusEnum = exports.StatusEnum || (exports.StatusEnum = {}));
