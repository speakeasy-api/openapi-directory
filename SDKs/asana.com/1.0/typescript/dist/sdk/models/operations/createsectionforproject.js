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
exports.CreateSectionForProjectResponse = exports.CreateSectionForProjectRequest = exports.CreateSectionForProject201ApplicationJson = exports.CreateSectionForProjectRequestBody = exports.CreateSectionForProjectQueryParams = exports.CreateSectionForProjectPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateSectionForProjectPathParams = /** @class */ (function (_super) {
    __extends(CreateSectionForProjectPathParams, _super);
    function CreateSectionForProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_gid" }),
        __metadata("design:type", String)
    ], CreateSectionForProjectPathParams.prototype, "projectGid", void 0);
    return CreateSectionForProjectPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateSectionForProjectPathParams = CreateSectionForProjectPathParams;
var CreateSectionForProjectQueryParams = /** @class */ (function (_super) {
    __extends(CreateSectionForProjectQueryParams, _super);
    function CreateSectionForProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], CreateSectionForProjectQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], CreateSectionForProjectQueryParams.prototype, "optPretty", void 0);
    return CreateSectionForProjectQueryParams;
}(utils_1.SpeakeasyBase));
exports.CreateSectionForProjectQueryParams = CreateSectionForProjectQueryParams;
var CreateSectionForProjectRequestBody = /** @class */ (function (_super) {
    __extends(CreateSectionForProjectRequestBody, _super);
    function CreateSectionForProjectRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.SectionRequest)
    ], CreateSectionForProjectRequestBody.prototype, "data", void 0);
    return CreateSectionForProjectRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateSectionForProjectRequestBody = CreateSectionForProjectRequestBody;
var CreateSectionForProject201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateSectionForProject201ApplicationJson, _super);
    function CreateSectionForProject201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.SectionResponse)
    ], CreateSectionForProject201ApplicationJson.prototype, "data", void 0);
    return CreateSectionForProject201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateSectionForProject201ApplicationJson = CreateSectionForProject201ApplicationJson;
var CreateSectionForProjectRequest = /** @class */ (function (_super) {
    __extends(CreateSectionForProjectRequest, _super);
    function CreateSectionForProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSectionForProjectPathParams)
    ], CreateSectionForProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSectionForProjectQueryParams)
    ], CreateSectionForProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateSectionForProjectRequestBody)
    ], CreateSectionForProjectRequest.prototype, "request", void 0);
    return CreateSectionForProjectRequest;
}(utils_1.SpeakeasyBase));
exports.CreateSectionForProjectRequest = CreateSectionForProjectRequest;
var CreateSectionForProjectResponse = /** @class */ (function (_super) {
    __extends(CreateSectionForProjectResponse, _super);
    function CreateSectionForProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateSectionForProjectResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], CreateSectionForProjectResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateSectionForProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSectionForProject201ApplicationJson)
    ], CreateSectionForProjectResponse.prototype, "createSectionForProject201ApplicationJSONObject", void 0);
    return CreateSectionForProjectResponse;
}(utils_1.SpeakeasyBase));
exports.CreateSectionForProjectResponse = CreateSectionForProjectResponse;
