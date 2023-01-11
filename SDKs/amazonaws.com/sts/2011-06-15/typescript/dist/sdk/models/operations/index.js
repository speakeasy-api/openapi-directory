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
__exportStar(require("./getdecodeauthorizationmessage"), exports);
__exportStar(require("./getgetaccesskeyinfo"), exports);
__exportStar(require("./getgetcalleridentity"), exports);
__exportStar(require("./getgetsessiontoken"), exports);
__exportStar(require("./postassumerole"), exports);
__exportStar(require("./postassumerolewithsaml"), exports);
__exportStar(require("./postassumerolewithwebidentity"), exports);
__exportStar(require("./postdecodeauthorizationmessage"), exports);
__exportStar(require("./postgetaccesskeyinfo"), exports);
__exportStar(require("./postgetcalleridentity"), exports);
__exportStar(require("./postgetfederationtoken"), exports);
__exportStar(require("./postgetsessiontoken"), exports);
