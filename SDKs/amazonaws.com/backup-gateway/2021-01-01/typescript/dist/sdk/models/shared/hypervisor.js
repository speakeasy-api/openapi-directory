"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.Hypervisor = void 0;
var utils_1 = require("../../../internal/utils");
var hypervisorstateenum_1 = require("./hypervisorstateenum");
var class_transformer_1 = require("class-transformer");
/**
 * <p>Represents the hypervisor's permissions to which the gateway will connect.</p> <p>A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.</p>
 */
var Hypervisor = /** @class */ (function (_super) {
    __extends(Hypervisor, _super);
    function Hypervisor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Host" }),
        __metadata("design:type", String)
    ], Hypervisor.prototype, "host", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "HypervisorArn" }),
        __metadata("design:type", String)
    ], Hypervisor.prototype, "hypervisorArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "KmsKeyArn" }),
        __metadata("design:type", String)
    ], Hypervisor.prototype, "kmsKeyArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Name" }),
        __metadata("design:type", String)
    ], Hypervisor.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "State" }),
        __metadata("design:type", String)
    ], Hypervisor.prototype, "state", void 0);
    return Hypervisor;
}(utils_1.SpeakeasyBase));
exports.Hypervisor = Hypervisor;
