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
__exportStar(require("./deleteordersid"), exports);
__exportStar(require("./getinventory"), exports);
__exportStar(require("./getorder"), exports);
__exportStar(require("./getorders"), exports);
__exportStar(require("./getreturns"), exports);
__exportStar(require("./gettrack"), exports);
__exportStar(require("./getusersme"), exports);
__exportStar(require("./postoauthaccesstoken"), exports);
__exportStar(require("./postorders"), exports);
__exportStar(require("./putordersidship"), exports);
__exportStar(require("./putordersidstatus"), exports);
__exportStar(require("./putreturns"), exports);
