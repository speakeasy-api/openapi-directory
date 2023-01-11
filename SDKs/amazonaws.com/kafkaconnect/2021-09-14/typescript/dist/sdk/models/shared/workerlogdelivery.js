"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerLogDelivery = void 0;
var utils_1 = require("../../../internal/utils");
var cloudwatchlogslogdelivery_1 = require("./cloudwatchlogslogdelivery");
var firehoselogdelivery_1 = require("./firehoselogdelivery");
var s3logdelivery_1 = require("./s3logdelivery");
// WorkerLogDelivery
/**
 * Workers can send worker logs to different destination types. This configuration specifies the details of these destinations.
**/
var WorkerLogDelivery = /** @class */ (function (_super) {
    __extends(WorkerLogDelivery, _super);
    function WorkerLogDelivery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloudWatchLogs" }),
        __metadata("design:type", cloudwatchlogslogdelivery_1.CloudWatchLogsLogDelivery)
    ], WorkerLogDelivery.prototype, "cloudWatchLogs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firehose" }),
        __metadata("design:type", firehoselogdelivery_1.FirehoseLogDelivery)
    ], WorkerLogDelivery.prototype, "firehose", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=s3" }),
        __metadata("design:type", s3logdelivery_1.S3LogDelivery)
    ], WorkerLogDelivery.prototype, "s3", void 0);
    return WorkerLogDelivery;
}(utils_1.SpeakeasyBase));
exports.WorkerLogDelivery = WorkerLogDelivery;
