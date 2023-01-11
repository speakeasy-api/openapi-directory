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
exports.CustomEventsAnalyticsResponse = exports.CustomEventsAnalyticsRequest = exports.CustomEventsAnalyticsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var CustomEventsAnalyticsQueryParams = /** @class */ (function (_super) {
    __extends(CustomEventsAnalyticsQueryParams, _super);
    function CustomEventsAnalyticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=app_id" }),
        __metadata("design:type", String)
    ], CustomEventsAnalyticsQueryParams.prototype, "appId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ending_at" }),
        __metadata("design:type", String)
    ], CustomEventsAnalyticsQueryParams.prototype, "endingAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=event" }),
        __metadata("design:type", String)
    ], CustomEventsAnalyticsQueryParams.prototype, "event", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=length" }),
        __metadata("design:type", String)
    ], CustomEventsAnalyticsQueryParams.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=segment_id" }),
        __metadata("design:type", String)
    ], CustomEventsAnalyticsQueryParams.prototype, "segmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=unit" }),
        __metadata("design:type", String)
    ], CustomEventsAnalyticsQueryParams.prototype, "unit", void 0);
    return CustomEventsAnalyticsQueryParams;
}(utils_1.SpeakeasyBase));
exports.CustomEventsAnalyticsQueryParams = CustomEventsAnalyticsQueryParams;
var CustomEventsAnalyticsRequest = /** @class */ (function (_super) {
    __extends(CustomEventsAnalyticsRequest, _super);
    function CustomEventsAnalyticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CustomEventsAnalyticsQueryParams)
    ], CustomEventsAnalyticsRequest.prototype, "queryParams", void 0);
    return CustomEventsAnalyticsRequest;
}(utils_1.SpeakeasyBase));
exports.CustomEventsAnalyticsRequest = CustomEventsAnalyticsRequest;
var CustomEventsAnalyticsResponse = /** @class */ (function (_super) {
    __extends(CustomEventsAnalyticsResponse, _super);
    function CustomEventsAnalyticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CustomEventsAnalyticsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CustomEventsAnalyticsResponse.prototype, "statusCode", void 0);
    return CustomEventsAnalyticsResponse;
}(utils_1.SpeakeasyBase));
exports.CustomEventsAnalyticsResponse = CustomEventsAnalyticsResponse;
