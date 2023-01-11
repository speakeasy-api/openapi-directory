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
__exportStar(require("./batchgetitem"), exports);
__exportStar(require("./batchwriteitem"), exports);
__exportStar(require("./createtable"), exports);
__exportStar(require("./deleteitem"), exports);
__exportStar(require("./deletetable"), exports);
__exportStar(require("./describetable"), exports);
__exportStar(require("./getitem"), exports);
__exportStar(require("./listtables"), exports);
__exportStar(require("./putitem"), exports);
__exportStar(require("./query"), exports);
__exportStar(require("./scan"), exports);
__exportStar(require("./updateitem"), exports);
__exportStar(require("./updatetable"), exports);
