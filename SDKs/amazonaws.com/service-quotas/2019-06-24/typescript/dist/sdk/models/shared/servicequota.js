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
exports.ServiceQuota = void 0;
var utils_1 = require("../../../internal/utils");
var errorreason_1 = require("./errorreason");
var quotaperiod_1 = require("./quotaperiod");
var metricinfo_1 = require("./metricinfo");
// ServiceQuota
/**
 * Information about a quota.
**/
var ServiceQuota = /** @class */ (function (_super) {
    __extends(ServiceQuota, _super);
    function ServiceQuota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Adjustable" }),
        __metadata("design:type", Boolean)
    ], ServiceQuota.prototype, "adjustable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ErrorReason" }),
        __metadata("design:type", errorreason_1.ErrorReason)
    ], ServiceQuota.prototype, "errorReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GlobalQuota" }),
        __metadata("design:type", Boolean)
    ], ServiceQuota.prototype, "globalQuota", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Period" }),
        __metadata("design:type", quotaperiod_1.QuotaPeriod)
    ], ServiceQuota.prototype, "period", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=QuotaArn" }),
        __metadata("design:type", String)
    ], ServiceQuota.prototype, "quotaArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=QuotaCode" }),
        __metadata("design:type", String)
    ], ServiceQuota.prototype, "quotaCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=QuotaName" }),
        __metadata("design:type", String)
    ], ServiceQuota.prototype, "quotaName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ServiceCode" }),
        __metadata("design:type", String)
    ], ServiceQuota.prototype, "serviceCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ServiceName" }),
        __metadata("design:type", String)
    ], ServiceQuota.prototype, "serviceName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Unit" }),
        __metadata("design:type", String)
    ], ServiceQuota.prototype, "unit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UsageMetric" }),
        __metadata("design:type", metricinfo_1.MetricInfo)
    ], ServiceQuota.prototype, "usageMetric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Value" }),
        __metadata("design:type", Number)
    ], ServiceQuota.prototype, "value", void 0);
    return ServiceQuota;
}(utils_1.SpeakeasyBase));
exports.ServiceQuota = ServiceQuota;
