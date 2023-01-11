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
__exportStar(require("./associateservicequotatemplate"), exports);
__exportStar(require("./deleteservicequotaincreaserequestfromtemplate"), exports);
__exportStar(require("./disassociateservicequotatemplate"), exports);
__exportStar(require("./getassociationforservicequotatemplate"), exports);
__exportStar(require("./getawsdefaultservicequota"), exports);
__exportStar(require("./getrequestedservicequotachange"), exports);
__exportStar(require("./getservicequota"), exports);
__exportStar(require("./getservicequotaincreaserequestfromtemplate"), exports);
__exportStar(require("./listawsdefaultservicequotas"), exports);
__exportStar(require("./listrequestedservicequotachangehistory"), exports);
__exportStar(require("./listrequestedservicequotachangehistorybyquota"), exports);
__exportStar(require("./listservicequotaincreaserequestsintemplate"), exports);
__exportStar(require("./listservicequotas"), exports);
__exportStar(require("./listservices"), exports);
__exportStar(require("./listtagsforresource"), exports);
__exportStar(require("./putservicequotaincreaserequestintotemplate"), exports);
__exportStar(require("./requestservicequotaincrease"), exports);
__exportStar(require("./tagresource"), exports);
__exportStar(require("./untagresource"), exports);
