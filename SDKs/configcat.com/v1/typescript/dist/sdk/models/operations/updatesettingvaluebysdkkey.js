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
exports.UpdateSettingValueBySdkkeyResponse = exports.UpdateSettingValueBySdkkeyRequest = exports.UpdateSettingValueBySdkkeyRequests = exports.UpdateSettingValueBySdkkeyHeaders = exports.UpdateSettingValueBySdkkeyQueryParams = exports.UpdateSettingValueBySdkkeyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateSettingValueBySdkkeyPathParams = /** @class */ (function (_super) {
    __extends(UpdateSettingValueBySdkkeyPathParams, _super);
    function UpdateSettingValueBySdkkeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=settingKeyOrId" }),
        __metadata("design:type", String)
    ], UpdateSettingValueBySdkkeyPathParams.prototype, "settingKeyOrId", void 0);
    return UpdateSettingValueBySdkkeyPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingValueBySdkkeyPathParams = UpdateSettingValueBySdkkeyPathParams;
var UpdateSettingValueBySdkkeyQueryParams = /** @class */ (function (_super) {
    __extends(UpdateSettingValueBySdkkeyQueryParams, _super);
    function UpdateSettingValueBySdkkeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=reason" }),
        __metadata("design:type", String)
    ], UpdateSettingValueBySdkkeyQueryParams.prototype, "reason", void 0);
    return UpdateSettingValueBySdkkeyQueryParams;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingValueBySdkkeyQueryParams = UpdateSettingValueBySdkkeyQueryParams;
var UpdateSettingValueBySdkkeyHeaders = /** @class */ (function (_super) {
    __extends(UpdateSettingValueBySdkkeyHeaders, _super);
    function UpdateSettingValueBySdkkeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-CONFIGCAT-SDKKEY" }),
        __metadata("design:type", String)
    ], UpdateSettingValueBySdkkeyHeaders.prototype, "xCONFIGCATSDKKEY", void 0);
    return UpdateSettingValueBySdkkeyHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingValueBySdkkeyHeaders = UpdateSettingValueBySdkkeyHeaders;
var UpdateSettingValueBySdkkeyRequests = /** @class */ (function (_super) {
    __extends(UpdateSettingValueBySdkkeyRequests, _super);
    function UpdateSettingValueBySdkkeyRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/*+json", elemType: shared.Operation }),
        __metadata("design:type", Array)
    ], UpdateSettingValueBySdkkeyRequests.prototype, "operations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json", elemType: shared.Operation }),
        __metadata("design:type", Array)
    ], UpdateSettingValueBySdkkeyRequests.prototype, "operations1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json-patch+json", elemType: shared.Operation }),
        __metadata("design:type", Array)
    ], UpdateSettingValueBySdkkeyRequests.prototype, "operations2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/json", elemType: shared.Operation }),
        __metadata("design:type", Array)
    ], UpdateSettingValueBySdkkeyRequests.prototype, "operations3", void 0);
    return UpdateSettingValueBySdkkeyRequests;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingValueBySdkkeyRequests = UpdateSettingValueBySdkkeyRequests;
var UpdateSettingValueBySdkkeyRequest = /** @class */ (function (_super) {
    __extends(UpdateSettingValueBySdkkeyRequest, _super);
    function UpdateSettingValueBySdkkeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSettingValueBySdkkeyPathParams)
    ], UpdateSettingValueBySdkkeyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSettingValueBySdkkeyQueryParams)
    ], UpdateSettingValueBySdkkeyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSettingValueBySdkkeyHeaders)
    ], UpdateSettingValueBySdkkeyRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSettingValueBySdkkeyRequests)
    ], UpdateSettingValueBySdkkeyRequest.prototype, "request", void 0);
    return UpdateSettingValueBySdkkeyRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingValueBySdkkeyRequest = UpdateSettingValueBySdkkeyRequest;
var UpdateSettingValueBySdkkeyResponse = /** @class */ (function (_super) {
    __extends(UpdateSettingValueBySdkkeyResponse, _super);
    function UpdateSettingValueBySdkkeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateSettingValueBySdkkeyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SettingValueModel)
    ], UpdateSettingValueBySdkkeyResponse.prototype, "settingValueModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SettingValueModelHaljson)
    ], UpdateSettingValueBySdkkeyResponse.prototype, "settingValueModelHaljson", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateSettingValueBySdkkeyResponse.prototype, "statusCode", void 0);
    return UpdateSettingValueBySdkkeyResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingValueBySdkkeyResponse = UpdateSettingValueBySdkkeyResponse;
