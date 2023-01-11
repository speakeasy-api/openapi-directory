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
exports.AssignProjectResourcesResponse = exports.AssignProjectResourcesRequest = exports.AssignProjectResources401ApplicationJson = exports.AssignProjectResources200ApplicationJson = exports.AssignProjectResourcesRequestBody = exports.AssignProjectResourcesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AssignProjectResourcesPathParams = /** @class */ (function (_super) {
    __extends(AssignProjectResourcesPathParams, _super);
    function AssignProjectResourcesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", String)
    ], AssignProjectResourcesPathParams.prototype, "projectId", void 0);
    return AssignProjectResourcesPathParams;
}(utils_1.SpeakeasyBase));
exports.AssignProjectResourcesPathParams = AssignProjectResourcesPathParams;
var AssignProjectResourcesRequestBody = /** @class */ (function (_super) {
    __extends(AssignProjectResourcesRequestBody, _super);
    function AssignProjectResourcesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources" }),
        __metadata("design:type", Array)
    ], AssignProjectResourcesRequestBody.prototype, "resources", void 0);
    return AssignProjectResourcesRequestBody;
}(utils_1.SpeakeasyBase));
exports.AssignProjectResourcesRequestBody = AssignProjectResourcesRequestBody;
var AssignProjectResources200ApplicationJson = /** @class */ (function (_super) {
    __extends(AssignProjectResources200ApplicationJson, _super);
    function AssignProjectResources200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources", elemType: shared.Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItems }),
        __metadata("design:type", Array)
    ], AssignProjectResources200ApplicationJson.prototype, "resources", void 0);
    return AssignProjectResources200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AssignProjectResources200ApplicationJson = AssignProjectResources200ApplicationJson;
var AssignProjectResources401ApplicationJson = /** @class */ (function (_super) {
    __extends(AssignProjectResources401ApplicationJson, _super);
    function AssignProjectResources401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AssignProjectResources401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AssignProjectResources401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], AssignProjectResources401ApplicationJson.prototype, "requestId", void 0);
    return AssignProjectResources401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AssignProjectResources401ApplicationJson = AssignProjectResources401ApplicationJson;
var AssignProjectResourcesRequest = /** @class */ (function (_super) {
    __extends(AssignProjectResourcesRequest, _super);
    function AssignProjectResourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignProjectResourcesPathParams)
    ], AssignProjectResourcesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AssignProjectResourcesRequestBody)
    ], AssignProjectResourcesRequest.prototype, "request", void 0);
    return AssignProjectResourcesRequest;
}(utils_1.SpeakeasyBase));
exports.AssignProjectResourcesRequest = AssignProjectResourcesRequest;
var AssignProjectResourcesResponse = /** @class */ (function (_super) {
    __extends(AssignProjectResourcesResponse, _super);
    function AssignProjectResourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AssignProjectResourcesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssignProjectResourcesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AssignProjectResourcesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignProjectResources200ApplicationJson)
    ], AssignProjectResourcesResponse.prototype, "assignProjectResources200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignProjectResources401ApplicationJson)
    ], AssignProjectResourcesResponse.prototype, "assignProjectResources401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], AssignProjectResourcesResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return AssignProjectResourcesResponse;
}(utils_1.SpeakeasyBase));
exports.AssignProjectResourcesResponse = AssignProjectResourcesResponse;
