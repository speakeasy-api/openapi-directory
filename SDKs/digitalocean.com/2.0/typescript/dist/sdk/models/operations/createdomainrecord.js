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
exports.CreateDomainRecordResponse = exports.CreateDomainRecordRequest = exports.CreateDomainRecord401ApplicationJson = exports.CreateDomainRecordRequestBody9Input = exports.CreateDomainRecordRequestBody8Input = exports.CreateDomainRecordRequestBody7Input = exports.CreateDomainRecordRequestBody6Input = exports.CreateDomainRecordRequestBody5Input = exports.CreateDomainRecordRequestBody4Input = exports.CreateDomainRecordRequestBody3Input = exports.CreateDomainRecordRequestBody2Input = exports.CreateDomainRecordRequestBody1Input = exports.CreateDomainRecordPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateDomainRecordPathParams = /** @class */ (function (_super) {
    __extends(CreateDomainRecordPathParams, _super);
    function CreateDomainRecordPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=domain_name" }),
        __metadata("design:type", String)
    ], CreateDomainRecordPathParams.prototype, "domainName", void 0);
    return CreateDomainRecordPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateDomainRecordPathParams = CreateDomainRecordPathParams;
var CreateDomainRecordRequestBody1Input = /** @class */ (function (_super) {
    __extends(CreateDomainRecordRequestBody1Input, _super);
    function CreateDomainRecordRequestBody1Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody1Input.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=flags" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody1Input.prototype, "flags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody1Input.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody1Input.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody1Input.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody1Input.prototype, "tag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody1Input.prototype, "ttl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody1Input.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody1Input.prototype, "weight", void 0);
    return CreateDomainRecordRequestBody1Input;
}(utils_1.SpeakeasyBase));
exports.CreateDomainRecordRequestBody1Input = CreateDomainRecordRequestBody1Input;
var CreateDomainRecordRequestBody2Input = /** @class */ (function (_super) {
    __extends(CreateDomainRecordRequestBody2Input, _super);
    function CreateDomainRecordRequestBody2Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody2Input.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=flags" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody2Input.prototype, "flags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody2Input.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody2Input.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody2Input.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody2Input.prototype, "tag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody2Input.prototype, "ttl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody2Input.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody2Input.prototype, "weight", void 0);
    return CreateDomainRecordRequestBody2Input;
}(utils_1.SpeakeasyBase));
exports.CreateDomainRecordRequestBody2Input = CreateDomainRecordRequestBody2Input;
var CreateDomainRecordRequestBody3Input = /** @class */ (function (_super) {
    __extends(CreateDomainRecordRequestBody3Input, _super);
    function CreateDomainRecordRequestBody3Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody3Input.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=flags" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody3Input.prototype, "flags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody3Input.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody3Input.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody3Input.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody3Input.prototype, "tag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody3Input.prototype, "ttl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody3Input.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody3Input.prototype, "weight", void 0);
    return CreateDomainRecordRequestBody3Input;
}(utils_1.SpeakeasyBase));
exports.CreateDomainRecordRequestBody3Input = CreateDomainRecordRequestBody3Input;
var CreateDomainRecordRequestBody4Input = /** @class */ (function (_super) {
    __extends(CreateDomainRecordRequestBody4Input, _super);
    function CreateDomainRecordRequestBody4Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody4Input.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=flags" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody4Input.prototype, "flags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody4Input.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody4Input.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody4Input.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody4Input.prototype, "tag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody4Input.prototype, "ttl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody4Input.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody4Input.prototype, "weight", void 0);
    return CreateDomainRecordRequestBody4Input;
}(utils_1.SpeakeasyBase));
exports.CreateDomainRecordRequestBody4Input = CreateDomainRecordRequestBody4Input;
var CreateDomainRecordRequestBody5Input = /** @class */ (function (_super) {
    __extends(CreateDomainRecordRequestBody5Input, _super);
    function CreateDomainRecordRequestBody5Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody5Input.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=flags" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody5Input.prototype, "flags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody5Input.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody5Input.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody5Input.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody5Input.prototype, "tag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody5Input.prototype, "ttl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody5Input.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody5Input.prototype, "weight", void 0);
    return CreateDomainRecordRequestBody5Input;
}(utils_1.SpeakeasyBase));
exports.CreateDomainRecordRequestBody5Input = CreateDomainRecordRequestBody5Input;
var CreateDomainRecordRequestBody6Input = /** @class */ (function (_super) {
    __extends(CreateDomainRecordRequestBody6Input, _super);
    function CreateDomainRecordRequestBody6Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody6Input.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=flags" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody6Input.prototype, "flags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody6Input.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody6Input.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody6Input.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody6Input.prototype, "tag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody6Input.prototype, "ttl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody6Input.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody6Input.prototype, "weight", void 0);
    return CreateDomainRecordRequestBody6Input;
}(utils_1.SpeakeasyBase));
exports.CreateDomainRecordRequestBody6Input = CreateDomainRecordRequestBody6Input;
var CreateDomainRecordRequestBody7Input = /** @class */ (function (_super) {
    __extends(CreateDomainRecordRequestBody7Input, _super);
    function CreateDomainRecordRequestBody7Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody7Input.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=flags" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody7Input.prototype, "flags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody7Input.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody7Input.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody7Input.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody7Input.prototype, "tag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody7Input.prototype, "ttl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody7Input.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody7Input.prototype, "weight", void 0);
    return CreateDomainRecordRequestBody7Input;
}(utils_1.SpeakeasyBase));
exports.CreateDomainRecordRequestBody7Input = CreateDomainRecordRequestBody7Input;
var CreateDomainRecordRequestBody8Input = /** @class */ (function (_super) {
    __extends(CreateDomainRecordRequestBody8Input, _super);
    function CreateDomainRecordRequestBody8Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody8Input.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=flags" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody8Input.prototype, "flags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody8Input.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody8Input.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody8Input.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody8Input.prototype, "tag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody8Input.prototype, "ttl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody8Input.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody8Input.prototype, "weight", void 0);
    return CreateDomainRecordRequestBody8Input;
}(utils_1.SpeakeasyBase));
exports.CreateDomainRecordRequestBody8Input = CreateDomainRecordRequestBody8Input;
var CreateDomainRecordRequestBody9Input = /** @class */ (function (_super) {
    __extends(CreateDomainRecordRequestBody9Input, _super);
    function CreateDomainRecordRequestBody9Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody9Input.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=flags" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody9Input.prototype, "flags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody9Input.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody9Input.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody9Input.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody9Input.prototype, "tag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody9Input.prototype, "ttl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBody9Input.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBody9Input.prototype, "weight", void 0);
    return CreateDomainRecordRequestBody9Input;
}(utils_1.SpeakeasyBase));
exports.CreateDomainRecordRequestBody9Input = CreateDomainRecordRequestBody9Input;
var CreateDomainRecord401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateDomainRecord401ApplicationJson, _super);
    function CreateDomainRecord401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateDomainRecord401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateDomainRecord401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], CreateDomainRecord401ApplicationJson.prototype, "requestId", void 0);
    return CreateDomainRecord401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateDomainRecord401ApplicationJson = CreateDomainRecord401ApplicationJson;
var CreateDomainRecordRequest = /** @class */ (function (_super) {
    __extends(CreateDomainRecordRequest, _super);
    function CreateDomainRecordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateDomainRecordPathParams)
    ], CreateDomainRecordRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], CreateDomainRecordRequest.prototype, "request", void 0);
    return CreateDomainRecordRequest;
}(utils_1.SpeakeasyBase));
exports.CreateDomainRecordRequest = CreateDomainRecordRequest;
var CreateDomainRecordResponse = /** @class */ (function (_super) {
    __extends(CreateDomainRecordResponse, _super);
    function CreateDomainRecordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateDomainRecordResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateDomainRecordResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateDomainRecordResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateDomainRecordResponse.prototype, "createDomainRecord201ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateDomainRecord401ApplicationJson)
    ], CreateDomainRecordResponse.prototype, "createDomainRecord401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], CreateDomainRecordResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return CreateDomainRecordResponse;
}(utils_1.SpeakeasyBase));
exports.CreateDomainRecordResponse = CreateDomainRecordResponse;
