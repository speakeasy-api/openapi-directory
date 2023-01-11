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
__exportStar(require("./addnotificationchannel"), exports);
__exportStar(require("./describeaccounthealth"), exports);
__exportStar(require("./describeaccountoverview"), exports);
__exportStar(require("./describeanomaly"), exports);
__exportStar(require("./describefeedback"), exports);
__exportStar(require("./describeinsight"), exports);
__exportStar(require("./describeresourcecollectionhealth"), exports);
__exportStar(require("./describeserviceintegration"), exports);
__exportStar(require("./getcostestimation"), exports);
__exportStar(require("./getresourcecollection"), exports);
__exportStar(require("./listanomaliesforinsight"), exports);
__exportStar(require("./listevents"), exports);
__exportStar(require("./listinsights"), exports);
__exportStar(require("./listnotificationchannels"), exports);
__exportStar(require("./listrecommendations"), exports);
__exportStar(require("./putfeedback"), exports);
__exportStar(require("./removenotificationchannel"), exports);
__exportStar(require("./searchinsights"), exports);
__exportStar(require("./startcostestimation"), exports);
__exportStar(require("./updateresourcecollection"), exports);
__exportStar(require("./updateserviceintegration"), exports);
