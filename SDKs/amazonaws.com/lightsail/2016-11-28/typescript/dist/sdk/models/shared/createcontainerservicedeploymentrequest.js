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
exports.CreateContainerServiceDeploymentRequest = void 0;
var utils_1 = require("../../../internal/utils");
var container_1 = require("./container");
var endpointrequest_1 = require("./endpointrequest");
var CreateContainerServiceDeploymentRequest = /** @class */ (function (_super) {
    __extends(CreateContainerServiceDeploymentRequest, _super);
    function CreateContainerServiceDeploymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=containers", elemType: container_1.Container }),
        __metadata("design:type", Object)
    ], CreateContainerServiceDeploymentRequest.prototype, "containers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publicEndpoint" }),
        __metadata("design:type", endpointrequest_1.EndpointRequest)
    ], CreateContainerServiceDeploymentRequest.prototype, "publicEndpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceName" }),
        __metadata("design:type", String)
    ], CreateContainerServiceDeploymentRequest.prototype, "serviceName", void 0);
    return CreateContainerServiceDeploymentRequest;
}(utils_1.SpeakeasyBase));
exports.CreateContainerServiceDeploymentRequest = CreateContainerServiceDeploymentRequest;
