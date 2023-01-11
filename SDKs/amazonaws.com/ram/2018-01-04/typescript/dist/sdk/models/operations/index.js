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
__exportStar(require("./acceptresourceshareinvitation"), exports);
__exportStar(require("./associateresourceshare"), exports);
__exportStar(require("./associateresourcesharepermission"), exports);
__exportStar(require("./createresourceshare"), exports);
__exportStar(require("./deleteresourceshare"), exports);
__exportStar(require("./disassociateresourceshare"), exports);
__exportStar(require("./disassociateresourcesharepermission"), exports);
__exportStar(require("./enablesharingwithawsorganization"), exports);
__exportStar(require("./getpermission"), exports);
__exportStar(require("./getresourcepolicies"), exports);
__exportStar(require("./getresourceshareassociations"), exports);
__exportStar(require("./getresourceshareinvitations"), exports);
__exportStar(require("./getresourceshares"), exports);
__exportStar(require("./listpendinginvitationresources"), exports);
__exportStar(require("./listpermissions"), exports);
__exportStar(require("./listprincipals"), exports);
__exportStar(require("./listresources"), exports);
__exportStar(require("./listresourcesharepermissions"), exports);
__exportStar(require("./listresourcetypes"), exports);
__exportStar(require("./promoteresourcesharecreatedfrompolicy"), exports);
__exportStar(require("./rejectresourceshareinvitation"), exports);
__exportStar(require("./tagresource"), exports);
__exportStar(require("./untagresource"), exports);
__exportStar(require("./updateresourceshare"), exports);
