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
exports.CampaignDetailsResponse = exports.CampaignDetailsRequest = exports.CampaignDetailsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var CampaignDetailsQueryParams = /** @class */ (function (_super) {
    __extends(CampaignDetailsQueryParams, _super);
    function CampaignDetailsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=campaign_id" }),
        __metadata("design:type", String)
    ], CampaignDetailsQueryParams.prototype, "campaignId", void 0);
    return CampaignDetailsQueryParams;
}(utils_1.SpeakeasyBase));
exports.CampaignDetailsQueryParams = CampaignDetailsQueryParams;
var CampaignDetailsRequest = /** @class */ (function (_super) {
    __extends(CampaignDetailsRequest, _super);
    function CampaignDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CampaignDetailsQueryParams)
    ], CampaignDetailsRequest.prototype, "queryParams", void 0);
    return CampaignDetailsRequest;
}(utils_1.SpeakeasyBase));
exports.CampaignDetailsRequest = CampaignDetailsRequest;
var CampaignDetailsResponse = /** @class */ (function (_super) {
    __extends(CampaignDetailsResponse, _super);
    function CampaignDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CampaignDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CampaignDetailsResponse.prototype, "statusCode", void 0);
    return CampaignDetailsResponse;
}(utils_1.SpeakeasyBase));
exports.CampaignDetailsResponse = CampaignDetailsResponse;
