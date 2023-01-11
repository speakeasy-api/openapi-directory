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
exports.UpdateFulfillmentPolicyResponse = exports.UpdateFulfillmentPolicyRequest = exports.UpdateFulfillmentPolicySecurity = exports.UpdateFulfillmentPolicyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateFulfillmentPolicyPathParams = /** @class */ (function (_super) {
    __extends(UpdateFulfillmentPolicyPathParams, _super);
    function UpdateFulfillmentPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=fulfillmentPolicyId" }),
        __metadata("design:type", String)
    ], UpdateFulfillmentPolicyPathParams.prototype, "fulfillmentPolicyId", void 0);
    return UpdateFulfillmentPolicyPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateFulfillmentPolicyPathParams = UpdateFulfillmentPolicyPathParams;
var UpdateFulfillmentPolicySecurity = /** @class */ (function (_super) {
    __extends(UpdateFulfillmentPolicySecurity, _super);
    function UpdateFulfillmentPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], UpdateFulfillmentPolicySecurity.prototype, "apiAuth", void 0);
    return UpdateFulfillmentPolicySecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateFulfillmentPolicySecurity = UpdateFulfillmentPolicySecurity;
var UpdateFulfillmentPolicyRequest = /** @class */ (function (_super) {
    __extends(UpdateFulfillmentPolicyRequest, _super);
    function UpdateFulfillmentPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateFulfillmentPolicyPathParams)
    ], UpdateFulfillmentPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FulfillmentPolicyRequest)
    ], UpdateFulfillmentPolicyRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateFulfillmentPolicySecurity)
    ], UpdateFulfillmentPolicyRequest.prototype, "security", void 0);
    return UpdateFulfillmentPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateFulfillmentPolicyRequest = UpdateFulfillmentPolicyRequest;
var UpdateFulfillmentPolicyResponse = /** @class */ (function (_super) {
    __extends(UpdateFulfillmentPolicyResponse, _super);
    function UpdateFulfillmentPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateFulfillmentPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SetFulfillmentPolicyResponse)
    ], UpdateFulfillmentPolicyResponse.prototype, "setFulfillmentPolicyResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateFulfillmentPolicyResponse.prototype, "statusCode", void 0);
    return UpdateFulfillmentPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateFulfillmentPolicyResponse = UpdateFulfillmentPolicyResponse;
