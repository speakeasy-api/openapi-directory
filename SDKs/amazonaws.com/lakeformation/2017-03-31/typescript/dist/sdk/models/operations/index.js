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
__exportStar(require("./addlftagstoresource"), exports);
__exportStar(require("./batchgrantpermissions"), exports);
__exportStar(require("./batchrevokepermissions"), exports);
__exportStar(require("./createlftag"), exports);
__exportStar(require("./deletelftag"), exports);
__exportStar(require("./deregisterresource"), exports);
__exportStar(require("./describeresource"), exports);
__exportStar(require("./getdatalakesettings"), exports);
__exportStar(require("./geteffectivepermissionsforpath"), exports);
__exportStar(require("./getlftag"), exports);
__exportStar(require("./getresourcelftags"), exports);
__exportStar(require("./grantpermissions"), exports);
__exportStar(require("./listlftags"), exports);
__exportStar(require("./listpermissions"), exports);
__exportStar(require("./listresources"), exports);
__exportStar(require("./putdatalakesettings"), exports);
__exportStar(require("./registerresource"), exports);
__exportStar(require("./removelftagsfromresource"), exports);
__exportStar(require("./revokepermissions"), exports);
__exportStar(require("./searchdatabasesbylftags"), exports);
__exportStar(require("./searchtablesbylftags"), exports);
__exportStar(require("./updatelftag"), exports);
__exportStar(require("./updateresource"), exports);
