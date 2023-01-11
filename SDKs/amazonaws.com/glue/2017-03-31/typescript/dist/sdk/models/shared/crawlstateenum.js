"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrawlStateEnum = void 0;
var CrawlStateEnum;
(function (CrawlStateEnum) {
    CrawlStateEnum["Running"] = "RUNNING";
    CrawlStateEnum["Cancelling"] = "CANCELLING";
    CrawlStateEnum["Cancelled"] = "CANCELLED";
    CrawlStateEnum["Succeeded"] = "SUCCEEDED";
    CrawlStateEnum["Failed"] = "FAILED";
})(CrawlStateEnum = exports.CrawlStateEnum || (exports.CrawlStateEnum = {}));
