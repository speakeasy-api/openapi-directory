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
exports.GrpcRoute = void 0;
var utils_1 = require("../../../internal/utils");
var grpcrouteaction_1 = require("./grpcrouteaction");
var grpcroutematch_1 = require("./grpcroutematch");
var grpcretrypolicy_1 = require("./grpcretrypolicy");
var grpctimeout_1 = require("./grpctimeout");
// GrpcRoute
/**
 * An object that represents a gRPC route type.
**/
var GrpcRoute = /** @class */ (function (_super) {
    __extends(GrpcRoute, _super);
    function GrpcRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", grpcrouteaction_1.GrpcRouteAction)
    ], GrpcRoute.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=match" }),
        __metadata("design:type", grpcroutematch_1.GrpcRouteMatch)
    ], GrpcRoute.prototype, "match", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=retryPolicy" }),
        __metadata("design:type", grpcretrypolicy_1.GrpcRetryPolicy)
    ], GrpcRoute.prototype, "retryPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeout" }),
        __metadata("design:type", grpctimeout_1.GrpcTimeout)
    ], GrpcRoute.prototype, "timeout", void 0);
    return GrpcRoute;
}(utils_1.SpeakeasyBase));
exports.GrpcRoute = GrpcRoute;
