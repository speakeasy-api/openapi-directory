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
exports.GetUpcomingScheduledCampaignsAndCanvasesResponse = exports.GetUpcomingScheduledCampaignsAndCanvasesRequest = exports.GetUpcomingScheduledCampaignsAndCanvasesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetUpcomingScheduledCampaignsAndCanvasesQueryParams = /** @class */ (function (_super) {
    __extends(GetUpcomingScheduledCampaignsAndCanvasesQueryParams, _super);
    function GetUpcomingScheduledCampaignsAndCanvasesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end_time" }),
        __metadata("design:type", String)
    ], GetUpcomingScheduledCampaignsAndCanvasesQueryParams.prototype, "endTime", void 0);
    return GetUpcomingScheduledCampaignsAndCanvasesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetUpcomingScheduledCampaignsAndCanvasesQueryParams = GetUpcomingScheduledCampaignsAndCanvasesQueryParams;
var GetUpcomingScheduledCampaignsAndCanvasesRequest = /** @class */ (function (_super) {
    __extends(GetUpcomingScheduledCampaignsAndCanvasesRequest, _super);
    function GetUpcomingScheduledCampaignsAndCanvasesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUpcomingScheduledCampaignsAndCanvasesQueryParams)
    ], GetUpcomingScheduledCampaignsAndCanvasesRequest.prototype, "queryParams", void 0);
    return GetUpcomingScheduledCampaignsAndCanvasesRequest;
}(utils_1.SpeakeasyBase));
exports.GetUpcomingScheduledCampaignsAndCanvasesRequest = GetUpcomingScheduledCampaignsAndCanvasesRequest;
var GetUpcomingScheduledCampaignsAndCanvasesResponse = /** @class */ (function (_super) {
    __extends(GetUpcomingScheduledCampaignsAndCanvasesResponse, _super);
    function GetUpcomingScheduledCampaignsAndCanvasesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUpcomingScheduledCampaignsAndCanvasesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUpcomingScheduledCampaignsAndCanvasesResponse.prototype, "statusCode", void 0);
    return GetUpcomingScheduledCampaignsAndCanvasesResponse;
}(utils_1.SpeakeasyBase));
exports.GetUpcomingScheduledCampaignsAndCanvasesResponse = GetUpcomingScheduledCampaignsAndCanvasesResponse;
