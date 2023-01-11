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
exports.InsertSectionForProjectResponse = exports.InsertSectionForProjectRequest = exports.InsertSectionForProject200ApplicationJson = exports.InsertSectionForProjectRequestBody = exports.InsertSectionForProjectQueryParams = exports.InsertSectionForProjectPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var InsertSectionForProjectPathParams = /** @class */ (function (_super) {
    __extends(InsertSectionForProjectPathParams, _super);
    function InsertSectionForProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_gid" }),
        __metadata("design:type", String)
    ], InsertSectionForProjectPathParams.prototype, "projectGid", void 0);
    return InsertSectionForProjectPathParams;
}(utils_1.SpeakeasyBase));
exports.InsertSectionForProjectPathParams = InsertSectionForProjectPathParams;
var InsertSectionForProjectQueryParams = /** @class */ (function (_super) {
    __extends(InsertSectionForProjectQueryParams, _super);
    function InsertSectionForProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], InsertSectionForProjectQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], InsertSectionForProjectQueryParams.prototype, "optPretty", void 0);
    return InsertSectionForProjectQueryParams;
}(utils_1.SpeakeasyBase));
exports.InsertSectionForProjectQueryParams = InsertSectionForProjectQueryParams;
var InsertSectionForProjectRequestBody = /** @class */ (function (_super) {
    __extends(InsertSectionForProjectRequestBody, _super);
    function InsertSectionForProjectRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.ProjectSectionInsertRequest)
    ], InsertSectionForProjectRequestBody.prototype, "data", void 0);
    return InsertSectionForProjectRequestBody;
}(utils_1.SpeakeasyBase));
exports.InsertSectionForProjectRequestBody = InsertSectionForProjectRequestBody;
var InsertSectionForProject200ApplicationJson = /** @class */ (function (_super) {
    __extends(InsertSectionForProject200ApplicationJson, _super);
    function InsertSectionForProject200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], InsertSectionForProject200ApplicationJson.prototype, "data", void 0);
    return InsertSectionForProject200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.InsertSectionForProject200ApplicationJson = InsertSectionForProject200ApplicationJson;
var InsertSectionForProjectRequest = /** @class */ (function (_super) {
    __extends(InsertSectionForProjectRequest, _super);
    function InsertSectionForProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InsertSectionForProjectPathParams)
    ], InsertSectionForProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InsertSectionForProjectQueryParams)
    ], InsertSectionForProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", InsertSectionForProjectRequestBody)
    ], InsertSectionForProjectRequest.prototype, "request", void 0);
    return InsertSectionForProjectRequest;
}(utils_1.SpeakeasyBase));
exports.InsertSectionForProjectRequest = InsertSectionForProjectRequest;
var InsertSectionForProjectResponse = /** @class */ (function (_super) {
    __extends(InsertSectionForProjectResponse, _super);
    function InsertSectionForProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], InsertSectionForProjectResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], InsertSectionForProjectResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], InsertSectionForProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InsertSectionForProject200ApplicationJson)
    ], InsertSectionForProjectResponse.prototype, "insertSectionForProject200ApplicationJSONObject", void 0);
    return InsertSectionForProjectResponse;
}(utils_1.SpeakeasyBase));
exports.InsertSectionForProjectResponse = InsertSectionForProjectResponse;
