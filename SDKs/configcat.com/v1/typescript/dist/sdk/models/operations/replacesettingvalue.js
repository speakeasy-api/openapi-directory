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
exports.ReplaceSettingValueResponse = exports.ReplaceSettingValueRequest = exports.ReplaceSettingValueRequests = exports.ReplaceSettingValueQueryParams = exports.ReplaceSettingValuePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReplaceSettingValuePathParams = /** @class */ (function (_super) {
    __extends(ReplaceSettingValuePathParams, _super);
    function ReplaceSettingValuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=environmentId" }),
        __metadata("design:type", String)
    ], ReplaceSettingValuePathParams.prototype, "environmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=settingId" }),
        __metadata("design:type", Number)
    ], ReplaceSettingValuePathParams.prototype, "settingId", void 0);
    return ReplaceSettingValuePathParams;
}(utils_1.SpeakeasyBase));
exports.ReplaceSettingValuePathParams = ReplaceSettingValuePathParams;
var ReplaceSettingValueQueryParams = /** @class */ (function (_super) {
    __extends(ReplaceSettingValueQueryParams, _super);
    function ReplaceSettingValueQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=reason" }),
        __metadata("design:type", String)
    ], ReplaceSettingValueQueryParams.prototype, "reason", void 0);
    return ReplaceSettingValueQueryParams;
}(utils_1.SpeakeasyBase));
exports.ReplaceSettingValueQueryParams = ReplaceSettingValueQueryParams;
var ReplaceSettingValueRequests = /** @class */ (function (_super) {
    __extends(ReplaceSettingValueRequests, _super);
    function ReplaceSettingValueRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.UpdateSettingValueModel)
    ], ReplaceSettingValueRequests.prototype, "updateSettingValueModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateSettingValueModel)
    ], ReplaceSettingValueRequests.prototype, "updateSettingValueModel1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.UpdateSettingValueModel)
    ], ReplaceSettingValueRequests.prototype, "updateSettingValueModel2", void 0);
    return ReplaceSettingValueRequests;
}(utils_1.SpeakeasyBase));
exports.ReplaceSettingValueRequests = ReplaceSettingValueRequests;
var ReplaceSettingValueRequest = /** @class */ (function (_super) {
    __extends(ReplaceSettingValueRequest, _super);
    function ReplaceSettingValueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReplaceSettingValuePathParams)
    ], ReplaceSettingValueRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReplaceSettingValueQueryParams)
    ], ReplaceSettingValueRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReplaceSettingValueRequests)
    ], ReplaceSettingValueRequest.prototype, "request", void 0);
    return ReplaceSettingValueRequest;
}(utils_1.SpeakeasyBase));
exports.ReplaceSettingValueRequest = ReplaceSettingValueRequest;
var ReplaceSettingValueResponse = /** @class */ (function (_super) {
    __extends(ReplaceSettingValueResponse, _super);
    function ReplaceSettingValueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReplaceSettingValueResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SettingValueModel)
    ], ReplaceSettingValueResponse.prototype, "settingValueModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SettingValueModelHaljson)
    ], ReplaceSettingValueResponse.prototype, "settingValueModelHaljson", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReplaceSettingValueResponse.prototype, "statusCode", void 0);
    return ReplaceSettingValueResponse;
}(utils_1.SpeakeasyBase));
exports.ReplaceSettingValueResponse = ReplaceSettingValueResponse;
