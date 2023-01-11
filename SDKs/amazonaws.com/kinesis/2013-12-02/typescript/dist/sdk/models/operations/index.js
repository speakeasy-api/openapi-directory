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
__exportStar(require("./addtagstostream"), exports);
__exportStar(require("./createstream"), exports);
__exportStar(require("./decreasestreamretentionperiod"), exports);
__exportStar(require("./deletestream"), exports);
__exportStar(require("./deregisterstreamconsumer"), exports);
__exportStar(require("./describelimits"), exports);
__exportStar(require("./describestream"), exports);
__exportStar(require("./describestreamconsumer"), exports);
__exportStar(require("./describestreamsummary"), exports);
__exportStar(require("./disableenhancedmonitoring"), exports);
__exportStar(require("./enableenhancedmonitoring"), exports);
__exportStar(require("./getrecords"), exports);
__exportStar(require("./getsharditerator"), exports);
__exportStar(require("./increasestreamretentionperiod"), exports);
__exportStar(require("./listshards"), exports);
__exportStar(require("./liststreamconsumers"), exports);
__exportStar(require("./liststreams"), exports);
__exportStar(require("./listtagsforstream"), exports);
__exportStar(require("./mergeshards"), exports);
__exportStar(require("./putrecord"), exports);
__exportStar(require("./putrecords"), exports);
__exportStar(require("./registerstreamconsumer"), exports);
__exportStar(require("./removetagsfromstream"), exports);
__exportStar(require("./splitshard"), exports);
__exportStar(require("./startstreamencryption"), exports);
__exportStar(require("./stopstreamencryption"), exports);
__exportStar(require("./updateshardcount"), exports);
