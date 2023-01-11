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
exports.AssignDefaultProjectResourcesResponse = exports.AssignDefaultProjectResourcesRequest = exports.AssignDefaultProjectResources401ApplicationJson = exports.AssignDefaultProjectResources200ApplicationJson = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AssignDefaultProjectResources200ApplicationJson = /** @class */ (function (_super) {
    __extends(AssignDefaultProjectResources200ApplicationJson, _super);
    function AssignDefaultProjectResources200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources", elemType: shared.Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItems }),
        __metadata("design:type", Array)
    ], AssignDefaultProjectResources200ApplicationJson.prototype, "resources", void 0);
    return AssignDefaultProjectResources200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AssignDefaultProjectResources200ApplicationJson = AssignDefaultProjectResources200ApplicationJson;
var AssignDefaultProjectResources401ApplicationJson = /** @class */ (function (_super) {
    __extends(AssignDefaultProjectResources401ApplicationJson, _super);
    function AssignDefaultProjectResources401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AssignDefaultProjectResources401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AssignDefaultProjectResources401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], AssignDefaultProjectResources401ApplicationJson.prototype, "requestId", void 0);
    return AssignDefaultProjectResources401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AssignDefaultProjectResources401ApplicationJson = AssignDefaultProjectResources401ApplicationJson;
var AssignDefaultProjectResourcesRequest = /** @class */ (function (_super) {
    __extends(AssignDefaultProjectResourcesRequest, _super);
    function AssignDefaultProjectResourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Onev21projects1Percent7BprojectIdPercent7D1resourcesPostRequestBodyContentApplication1jsonSchema)
    ], AssignDefaultProjectResourcesRequest.prototype, "request", void 0);
    return AssignDefaultProjectResourcesRequest;
}(utils_1.SpeakeasyBase));
exports.AssignDefaultProjectResourcesRequest = AssignDefaultProjectResourcesRequest;
var AssignDefaultProjectResourcesResponse = /** @class */ (function (_super) {
    __extends(AssignDefaultProjectResourcesResponse, _super);
    function AssignDefaultProjectResourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AssignDefaultProjectResourcesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssignDefaultProjectResourcesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AssignDefaultProjectResourcesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignDefaultProjectResources200ApplicationJson)
    ], AssignDefaultProjectResourcesResponse.prototype, "assignDefaultProjectResources200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignDefaultProjectResources401ApplicationJson)
    ], AssignDefaultProjectResourcesResponse.prototype, "assignDefaultProjectResources401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], AssignDefaultProjectResourcesResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return AssignDefaultProjectResourcesResponse;
}(utils_1.SpeakeasyBase));
exports.AssignDefaultProjectResourcesResponse = AssignDefaultProjectResourcesResponse;
