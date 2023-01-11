"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./attributedoesnotexist"), exports);
__exportStar(require("./attributelist"), exports);
__exportStar(require("./domainmetadataresult"), exports);
__exportStar(require("./getattributesresult"), exports);
__exportStar(require("./invalidnexttoken"), exports);
__exportStar(require("./itemlist"), exports);
__exportStar(require("./listdomainsresult"), exports);
__exportStar(require("./missingparameter"), exports);
__exportStar(require("./nosuchdomain"), exports);
__exportStar(require("./numberdomainsexceeded"), exports);
__exportStar(require("./numberitemattributesexceeded"), exports);
__exportStar(require("./numbersubmittedattributesexceeded"), exports);
__exportStar(require("./requesttimeout"), exports);
__exportStar(require("./security"), exports);
__exportStar(require("./selectresult"), exports);
__exportStar(require("./toomanyrequestedattributes"), exports);
