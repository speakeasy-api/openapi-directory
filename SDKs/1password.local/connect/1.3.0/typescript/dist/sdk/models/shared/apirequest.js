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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRequest = exports.ApiRequestResultEnum = exports.ApiRequestResource = exports.ApiRequestResourceVault = exports.ApiRequestResourceTypeEnum = exports.ApiRequestResourceItem = exports.ApiRequestActor = exports.ApiRequestActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var ApiRequestActionEnum;
(function (ApiRequestActionEnum) {
    ApiRequestActionEnum["Read"] = "READ";
    ApiRequestActionEnum["Create"] = "CREATE";
    ApiRequestActionEnum["Update"] = "UPDATE";
    ApiRequestActionEnum["Delete"] = "DELETE";
})(ApiRequestActionEnum = exports.ApiRequestActionEnum || (exports.ApiRequestActionEnum = {}));
var ApiRequestActor = /** @class */ (function (_super) {
    __extends(ApiRequestActor, _super);
    function ApiRequestActor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], ApiRequestActor.prototype, "account", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ApiRequestActor.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jti" }),
        __metadata("design:type", String)
    ], ApiRequestActor.prototype, "jti", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestIp" }),
        __metadata("design:type", String)
    ], ApiRequestActor.prototype, "requestIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userAgent" }),
        __metadata("design:type", String)
    ], ApiRequestActor.prototype, "userAgent", void 0);
    return ApiRequestActor;
}(utils_1.SpeakeasyBase));
exports.ApiRequestActor = ApiRequestActor;
var ApiRequestResourceItem = /** @class */ (function (_super) {
    __extends(ApiRequestResourceItem, _super);
    function ApiRequestResourceItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ApiRequestResourceItem.prototype, "id", void 0);
    return ApiRequestResourceItem;
}(utils_1.SpeakeasyBase));
exports.ApiRequestResourceItem = ApiRequestResourceItem;
var ApiRequestResourceTypeEnum;
(function (ApiRequestResourceTypeEnum) {
    ApiRequestResourceTypeEnum["Item"] = "ITEM";
    ApiRequestResourceTypeEnum["Vault"] = "VAULT";
})(ApiRequestResourceTypeEnum = exports.ApiRequestResourceTypeEnum || (exports.ApiRequestResourceTypeEnum = {}));
var ApiRequestResourceVault = /** @class */ (function (_super) {
    __extends(ApiRequestResourceVault, _super);
    function ApiRequestResourceVault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ApiRequestResourceVault.prototype, "id", void 0);
    return ApiRequestResourceVault;
}(utils_1.SpeakeasyBase));
exports.ApiRequestResourceVault = ApiRequestResourceVault;
var ApiRequestResource = /** @class */ (function (_super) {
    __extends(ApiRequestResource, _super);
    function ApiRequestResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=item" }),
        __metadata("design:type", ApiRequestResourceItem)
    ], ApiRequestResource.prototype, "item", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=itemVersion" }),
        __metadata("design:type", Number)
    ], ApiRequestResource.prototype, "itemVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ApiRequestResource.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vault" }),
        __metadata("design:type", ApiRequestResourceVault)
    ], ApiRequestResource.prototype, "vault", void 0);
    return ApiRequestResource;
}(utils_1.SpeakeasyBase));
exports.ApiRequestResource = ApiRequestResource;
var ApiRequestResultEnum;
(function (ApiRequestResultEnum) {
    ApiRequestResultEnum["Success"] = "SUCCESS";
    ApiRequestResultEnum["Deny"] = "DENY";
})(ApiRequestResultEnum = exports.ApiRequestResultEnum || (exports.ApiRequestResultEnum = {}));
// ApiRequest
/**
 * Represents a request that was made to the API. Including what Token was used and what resource was accessed.
**/
var ApiRequest = /** @class */ (function (_super) {
    __extends(ApiRequest, _super);
    function ApiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ApiRequest.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=actor" }),
        __metadata("design:type", ApiRequestActor)
    ], ApiRequest.prototype, "actor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], ApiRequest.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource" }),
        __metadata("design:type", ApiRequestResource)
    ], ApiRequest.prototype, "resource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ApiRequest.prototype, "result", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timestamp" }),
        __metadata("design:type", Date)
    ], ApiRequest.prototype, "timestamp", void 0);
    return ApiRequest;
}(utils_1.SpeakeasyBase));
exports.ApiRequest = ApiRequest;
