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
exports.CreateProjectStatusForProjectResponse = exports.CreateProjectStatusForProjectRequest = exports.CreateProjectStatusForProject201ApplicationJson = exports.CreateProjectStatusForProjectRequestBodyInput = exports.CreateProjectStatusForProjectQueryParams = exports.CreateProjectStatusForProjectPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateProjectStatusForProjectPathParams = /** @class */ (function (_super) {
    __extends(CreateProjectStatusForProjectPathParams, _super);
    function CreateProjectStatusForProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_gid" }),
        __metadata("design:type", String)
    ], CreateProjectStatusForProjectPathParams.prototype, "projectGid", void 0);
    return CreateProjectStatusForProjectPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateProjectStatusForProjectPathParams = CreateProjectStatusForProjectPathParams;
var CreateProjectStatusForProjectQueryParams = /** @class */ (function (_super) {
    __extends(CreateProjectStatusForProjectQueryParams, _super);
    function CreateProjectStatusForProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], CreateProjectStatusForProjectQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], CreateProjectStatusForProjectQueryParams.prototype, "optPretty", void 0);
    return CreateProjectStatusForProjectQueryParams;
}(utils_1.SpeakeasyBase));
exports.CreateProjectStatusForProjectQueryParams = CreateProjectStatusForProjectQueryParams;
var CreateProjectStatusForProjectRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateProjectStatusForProjectRequestBodyInput, _super);
    function CreateProjectStatusForProjectRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.ProjectStatusRequestInput)
    ], CreateProjectStatusForProjectRequestBodyInput.prototype, "data", void 0);
    return CreateProjectStatusForProjectRequestBodyInput;
}(utils_1.SpeakeasyBase));
exports.CreateProjectStatusForProjectRequestBodyInput = CreateProjectStatusForProjectRequestBodyInput;
var CreateProjectStatusForProject201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateProjectStatusForProject201ApplicationJson, _super);
    function CreateProjectStatusForProject201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.ProjectStatusResponse)
    ], CreateProjectStatusForProject201ApplicationJson.prototype, "data", void 0);
    return CreateProjectStatusForProject201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateProjectStatusForProject201ApplicationJson = CreateProjectStatusForProject201ApplicationJson;
var CreateProjectStatusForProjectRequest = /** @class */ (function (_super) {
    __extends(CreateProjectStatusForProjectRequest, _super);
    function CreateProjectStatusForProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateProjectStatusForProjectPathParams)
    ], CreateProjectStatusForProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateProjectStatusForProjectQueryParams)
    ], CreateProjectStatusForProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateProjectStatusForProjectRequestBodyInput)
    ], CreateProjectStatusForProjectRequest.prototype, "request", void 0);
    return CreateProjectStatusForProjectRequest;
}(utils_1.SpeakeasyBase));
exports.CreateProjectStatusForProjectRequest = CreateProjectStatusForProjectRequest;
var CreateProjectStatusForProjectResponse = /** @class */ (function (_super) {
    __extends(CreateProjectStatusForProjectResponse, _super);
    function CreateProjectStatusForProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateProjectStatusForProjectResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], CreateProjectStatusForProjectResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateProjectStatusForProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateProjectStatusForProject201ApplicationJson)
    ], CreateProjectStatusForProjectResponse.prototype, "createProjectStatusForProject201ApplicationJSONObject", void 0);
    return CreateProjectStatusForProjectResponse;
}(utils_1.SpeakeasyBase));
exports.CreateProjectStatusForProjectResponse = CreateProjectStatusForProjectResponse;
