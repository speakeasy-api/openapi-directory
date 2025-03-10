"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppGetApplicationApiUsageResponse = exports.AppGetApplicationApiUsage200Wildcard = exports.AppGetApplicationApiUsageRequest = exports.AppGetApplicationApiUsageSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AppGetApplicationApiUsageSecurity = /** @class */ (function (_super) {
    __extends(AppGetApplicationApiUsageSecurity, _super);
    function AppGetApplicationApiUsageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], AppGetApplicationApiUsageSecurity.prototype, "oauth2", void 0);
    return AppGetApplicationApiUsageSecurity;
}(utils_1.SpeakeasyBase));
exports.AppGetApplicationApiUsageSecurity = AppGetApplicationApiUsageSecurity;
var AppGetApplicationApiUsageRequest = /** @class */ (function (_super) {
    __extends(AppGetApplicationApiUsageRequest, _super);
    function AppGetApplicationApiUsageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=applicationId",
        }),
        __metadata("design:type", Number)
    ], AppGetApplicationApiUsageRequest.prototype, "applicationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=end;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
        }),
        __metadata("design:type", Date)
    ], AppGetApplicationApiUsageRequest.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=start;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
        }),
        __metadata("design:type", Date)
    ], AppGetApplicationApiUsageRequest.prototype, "start", void 0);
    return AppGetApplicationApiUsageRequest;
}(utils_1.SpeakeasyBase));
exports.AppGetApplicationApiUsageRequest = AppGetApplicationApiUsageRequest;
/**
 * Look at the Response property for more information about the nature of this response
 */
var AppGetApplicationApiUsage200Wildcard = /** @class */ (function (_super) {
    __extends(AppGetApplicationApiUsage200Wildcard, _super);
    function AppGetApplicationApiUsage200Wildcard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AppGetApplicationApiUsage200Wildcard.prototype, "detailedErrorTrace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AppGetApplicationApiUsage200Wildcard.prototype, "errorCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AppGetApplicationApiUsage200Wildcard.prototype, "errorStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AppGetApplicationApiUsage200Wildcard.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AppGetApplicationApiUsage200Wildcard.prototype, "messageData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ApplicationsApiUsage)
    ], AppGetApplicationApiUsage200Wildcard.prototype, "response", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AppGetApplicationApiUsage200Wildcard.prototype, "throttleSeconds", void 0);
    return AppGetApplicationApiUsage200Wildcard;
}(utils_1.SpeakeasyBase));
exports.AppGetApplicationApiUsage200Wildcard = AppGetApplicationApiUsage200Wildcard;
var AppGetApplicationApiUsageResponse = /** @class */ (function (_super) {
    __extends(AppGetApplicationApiUsageResponse, _super);
    function AppGetApplicationApiUsageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AppGetApplicationApiUsageResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AppGetApplicationApiUsageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AppGetApplicationApiUsageResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AppGetApplicationApiUsageResponse.prototype, "rawResponse", void 0);
    return AppGetApplicationApiUsageResponse;
}(utils_1.SpeakeasyBase));
exports.AppGetApplicationApiUsageResponse = AppGetApplicationApiUsageResponse;
