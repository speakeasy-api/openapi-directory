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
exports.OrderListRequest = void 0;
var utils_1 = require("../../../internal/utils");
var datesearchtypeenum_1 = require("./datesearchtypeenum");
var OrderListRequest = /** @class */ (function (_super) {
    __extends(OrderListRequest, _super);
    function OrderListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountIds" }),
        __metadata("design:type", Array)
    ], OrderListRequest.prototype, "accountIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=beezUPOrderStatuses" }),
        __metadata("design:type", Array)
    ], OrderListRequest.prototype, "beezUPOrderStatuses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=beginPeriodUtcDate" }),
        __metadata("design:type", Date)
    ], OrderListRequest.prototype, "beginPeriodUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateSearchType" }),
        __metadata("design:type", String)
    ], OrderListRequest.prototype, "dateSearchType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endPeriodUtcDate" }),
        __metadata("design:type", Date)
    ], OrderListRequest.prototype, "endPeriodUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoiceAvailabilityType" }),
        __metadata("design:type", String)
    ], OrderListRequest.prototype, "invoiceAvailabilityType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marketplaceBusinessCodes" }),
        __metadata("design:type", Array)
    ], OrderListRequest.prototype, "marketplaceBusinessCodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marketplaceOrderIds" }),
        __metadata("design:type", Array)
    ], OrderListRequest.prototype, "marketplaceOrderIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marketplaceTechnicalCodes" }),
        __metadata("design:type", Array)
    ], OrderListRequest.prototype, "marketplaceTechnicalCodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderMerchantInfoSynchronizationStatus" }),
        __metadata("design:type", String)
    ], OrderListRequest.prototype, "orderMerchantInfoSynchronizationStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Buyer_Name" }),
        __metadata("design:type", String)
    ], OrderListRequest.prototype, "orderBuyerName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_MerchantOrderIds" }),
        __metadata("design:type", Array)
    ], OrderListRequest.prototype, "orderMerchantOrderIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pageNumber" }),
        __metadata("design:type", Number)
    ], OrderListRequest.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pageSize" }),
        __metadata("design:type", Number)
    ], OrderListRequest.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storeIds" }),
        __metadata("design:type", Array)
    ], OrderListRequest.prototype, "storeIds", void 0);
    return OrderListRequest;
}(utils_1.SpeakeasyBase));
exports.OrderListRequest = OrderListRequest;
