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
__exportStar(require("./batchgettraces"), exports);
__exportStar(require("./creategroup"), exports);
__exportStar(require("./createsamplingrule"), exports);
__exportStar(require("./deletegroup"), exports);
__exportStar(require("./deletesamplingrule"), exports);
__exportStar(require("./getencryptionconfig"), exports);
__exportStar(require("./getgroup"), exports);
__exportStar(require("./getgroups"), exports);
__exportStar(require("./getinsight"), exports);
__exportStar(require("./getinsightevents"), exports);
__exportStar(require("./getinsightimpactgraph"), exports);
__exportStar(require("./getinsightsummaries"), exports);
__exportStar(require("./getsamplingrules"), exports);
__exportStar(require("./getsamplingstatisticsummaries"), exports);
__exportStar(require("./getsamplingtargets"), exports);
__exportStar(require("./getservicegraph"), exports);
__exportStar(require("./gettimeseriesservicestatistics"), exports);
__exportStar(require("./gettracegraph"), exports);
__exportStar(require("./gettracesummaries"), exports);
__exportStar(require("./listtagsforresource"), exports);
__exportStar(require("./putencryptionconfig"), exports);
__exportStar(require("./puttelemetryrecords"), exports);
__exportStar(require("./puttracesegments"), exports);
__exportStar(require("./tagresource"), exports);
__exportStar(require("./untagresource"), exports);
__exportStar(require("./updategroup"), exports);
__exportStar(require("./updatesamplingrule"), exports);
