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
exports.RemoveCustomFieldSettingForProjectResponse = exports.RemoveCustomFieldSettingForProjectRequest = exports.RemoveCustomFieldSettingForProject200ApplicationJson = exports.RemoveCustomFieldSettingForProjectRequestBody = exports.RemoveCustomFieldSettingForProjectQueryParams = exports.RemoveCustomFieldSettingForProjectPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RemoveCustomFieldSettingForProjectPathParams = /** @class */ (function (_super) {
    __extends(RemoveCustomFieldSettingForProjectPathParams, _super);
    function RemoveCustomFieldSettingForProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_gid" }),
        __metadata("design:type", String)
    ], RemoveCustomFieldSettingForProjectPathParams.prototype, "projectGid", void 0);
    return RemoveCustomFieldSettingForProjectPathParams;
}(utils_1.SpeakeasyBase));
exports.RemoveCustomFieldSettingForProjectPathParams = RemoveCustomFieldSettingForProjectPathParams;
var RemoveCustomFieldSettingForProjectQueryParams = /** @class */ (function (_super) {
    __extends(RemoveCustomFieldSettingForProjectQueryParams, _super);
    function RemoveCustomFieldSettingForProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], RemoveCustomFieldSettingForProjectQueryParams.prototype, "optPretty", void 0);
    return RemoveCustomFieldSettingForProjectQueryParams;
}(utils_1.SpeakeasyBase));
exports.RemoveCustomFieldSettingForProjectQueryParams = RemoveCustomFieldSettingForProjectQueryParams;
var RemoveCustomFieldSettingForProjectRequestBody = /** @class */ (function (_super) {
    __extends(RemoveCustomFieldSettingForProjectRequestBody, _super);
    function RemoveCustomFieldSettingForProjectRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.RemoveCustomFieldSettingRequest)
    ], RemoveCustomFieldSettingForProjectRequestBody.prototype, "data", void 0);
    return RemoveCustomFieldSettingForProjectRequestBody;
}(utils_1.SpeakeasyBase));
exports.RemoveCustomFieldSettingForProjectRequestBody = RemoveCustomFieldSettingForProjectRequestBody;
var RemoveCustomFieldSettingForProject200ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveCustomFieldSettingForProject200ApplicationJson, _super);
    function RemoveCustomFieldSettingForProject200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], RemoveCustomFieldSettingForProject200ApplicationJson.prototype, "data", void 0);
    return RemoveCustomFieldSettingForProject200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RemoveCustomFieldSettingForProject200ApplicationJson = RemoveCustomFieldSettingForProject200ApplicationJson;
var RemoveCustomFieldSettingForProjectRequest = /** @class */ (function (_super) {
    __extends(RemoveCustomFieldSettingForProjectRequest, _super);
    function RemoveCustomFieldSettingForProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveCustomFieldSettingForProjectPathParams)
    ], RemoveCustomFieldSettingForProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveCustomFieldSettingForProjectQueryParams)
    ], RemoveCustomFieldSettingForProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveCustomFieldSettingForProjectRequestBody)
    ], RemoveCustomFieldSettingForProjectRequest.prototype, "request", void 0);
    return RemoveCustomFieldSettingForProjectRequest;
}(utils_1.SpeakeasyBase));
exports.RemoveCustomFieldSettingForProjectRequest = RemoveCustomFieldSettingForProjectRequest;
var RemoveCustomFieldSettingForProjectResponse = /** @class */ (function (_super) {
    __extends(RemoveCustomFieldSettingForProjectResponse, _super);
    function RemoveCustomFieldSettingForProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RemoveCustomFieldSettingForProjectResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], RemoveCustomFieldSettingForProjectResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RemoveCustomFieldSettingForProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveCustomFieldSettingForProject200ApplicationJson)
    ], RemoveCustomFieldSettingForProjectResponse.prototype, "removeCustomFieldSettingForProject200ApplicationJSONObject", void 0);
    return RemoveCustomFieldSettingForProjectResponse;
}(utils_1.SpeakeasyBase));
exports.RemoveCustomFieldSettingForProjectResponse = RemoveCustomFieldSettingForProjectResponse;
