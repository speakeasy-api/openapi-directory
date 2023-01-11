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
exports.IticrResponse = exports.IticrRequest = exports.Iticr504ApplicationJson = exports.Iticr504ApplicationJsonErrorDescriptionEnum = exports.Iticr504ApplicationJsonErrorEnum = exports.Iticr503ApplicationJson = exports.Iticr503ApplicationJsonErrorDescriptionEnum = exports.Iticr503ApplicationJsonErrorEnum = exports.Iticr502ApplicationJson = exports.Iticr502ApplicationJsonErrorDescriptionEnum = exports.Iticr502ApplicationJsonErrorEnum = exports.Iticr500ApplicationJson = exports.Iticr500ApplicationJsonErrorDescriptionEnum = exports.Iticr500ApplicationJsonErrorEnum = exports.Iticr404ApplicationJson = exports.Iticr404ApplicationJsonErrorDescriptionEnum = exports.Iticr404ApplicationJsonErrorEnum = exports.Iticr401ApplicationJson = exports.Iticr401ApplicationJsonErrorDescriptionEnum = exports.Iticr401ApplicationJsonErrorEnum = exports.Iticr400ApplicationJson = exports.Iticr400ApplicationJsonErrorDescriptionEnum = exports.Iticr400ApplicationJsonErrorEnum = exports.IticrSecurity = exports.IticrRequestBody = exports.IticrRequestBodyFormatEnum = exports.IticrRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var IticrRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(IticrRequestBodyCertificateParameters, _super);
    function IticrRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], IticrRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], IticrRequestBodyCertificateParameters.prototype, "certno", void 0);
    return IticrRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.IticrRequestBodyCertificateParameters = IticrRequestBodyCertificateParameters;
var IticrRequestBodyFormatEnum;
(function (IticrRequestBodyFormatEnum) {
    IticrRequestBodyFormatEnum["Pdf"] = "pdf";
})(IticrRequestBodyFormatEnum = exports.IticrRequestBodyFormatEnum || (exports.IticrRequestBodyFormatEnum = {}));
var IticrRequestBody = /** @class */ (function (_super) {
    __extends(IticrRequestBody, _super);
    function IticrRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", IticrRequestBodyCertificateParameters)
    ], IticrRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], IticrRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], IticrRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], IticrRequestBody.prototype, "txnId", void 0);
    return IticrRequestBody;
}(utils_1.SpeakeasyBase));
exports.IticrRequestBody = IticrRequestBody;
var IticrSecurity = /** @class */ (function (_super) {
    __extends(IticrSecurity, _super);
    function IticrSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], IticrSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], IticrSecurity.prototype, "clientId", void 0);
    return IticrSecurity;
}(utils_1.SpeakeasyBase));
exports.IticrSecurity = IticrSecurity;
var Iticr400ApplicationJsonErrorEnum;
(function (Iticr400ApplicationJsonErrorEnum) {
    Iticr400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Iticr400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Iticr400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Iticr400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Iticr400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Iticr400ApplicationJsonErrorEnum = exports.Iticr400ApplicationJsonErrorEnum || (exports.Iticr400ApplicationJsonErrorEnum = {}));
var Iticr400ApplicationJsonErrorDescriptionEnum;
(function (Iticr400ApplicationJsonErrorDescriptionEnum) {
    Iticr400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Iticr400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Iticr400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Iticr400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Iticr400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Iticr400ApplicationJsonErrorDescriptionEnum = exports.Iticr400ApplicationJsonErrorDescriptionEnum || (exports.Iticr400ApplicationJsonErrorDescriptionEnum = {}));
var Iticr400ApplicationJson = /** @class */ (function (_super) {
    __extends(Iticr400ApplicationJson, _super);
    function Iticr400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Iticr400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Iticr400ApplicationJson.prototype, "errorDescription", void 0);
    return Iticr400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Iticr400ApplicationJson = Iticr400ApplicationJson;
var Iticr401ApplicationJsonErrorEnum;
(function (Iticr401ApplicationJsonErrorEnum) {
    Iticr401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Iticr401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Iticr401ApplicationJsonErrorEnum = exports.Iticr401ApplicationJsonErrorEnum || (exports.Iticr401ApplicationJsonErrorEnum = {}));
var Iticr401ApplicationJsonErrorDescriptionEnum;
(function (Iticr401ApplicationJsonErrorDescriptionEnum) {
    Iticr401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Iticr401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Iticr401ApplicationJsonErrorDescriptionEnum = exports.Iticr401ApplicationJsonErrorDescriptionEnum || (exports.Iticr401ApplicationJsonErrorDescriptionEnum = {}));
var Iticr401ApplicationJson = /** @class */ (function (_super) {
    __extends(Iticr401ApplicationJson, _super);
    function Iticr401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Iticr401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Iticr401ApplicationJson.prototype, "errorDescription", void 0);
    return Iticr401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Iticr401ApplicationJson = Iticr401ApplicationJson;
var Iticr404ApplicationJsonErrorEnum;
(function (Iticr404ApplicationJsonErrorEnum) {
    Iticr404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Iticr404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Iticr404ApplicationJsonErrorEnum = exports.Iticr404ApplicationJsonErrorEnum || (exports.Iticr404ApplicationJsonErrorEnum = {}));
var Iticr404ApplicationJsonErrorDescriptionEnum;
(function (Iticr404ApplicationJsonErrorDescriptionEnum) {
    Iticr404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Iticr404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Iticr404ApplicationJsonErrorDescriptionEnum = exports.Iticr404ApplicationJsonErrorDescriptionEnum || (exports.Iticr404ApplicationJsonErrorDescriptionEnum = {}));
var Iticr404ApplicationJson = /** @class */ (function (_super) {
    __extends(Iticr404ApplicationJson, _super);
    function Iticr404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Iticr404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Iticr404ApplicationJson.prototype, "errorDescription", void 0);
    return Iticr404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Iticr404ApplicationJson = Iticr404ApplicationJson;
var Iticr500ApplicationJsonErrorEnum;
(function (Iticr500ApplicationJsonErrorEnum) {
    Iticr500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Iticr500ApplicationJsonErrorEnum = exports.Iticr500ApplicationJsonErrorEnum || (exports.Iticr500ApplicationJsonErrorEnum = {}));
var Iticr500ApplicationJsonErrorDescriptionEnum;
(function (Iticr500ApplicationJsonErrorDescriptionEnum) {
    Iticr500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Iticr500ApplicationJsonErrorDescriptionEnum = exports.Iticr500ApplicationJsonErrorDescriptionEnum || (exports.Iticr500ApplicationJsonErrorDescriptionEnum = {}));
var Iticr500ApplicationJson = /** @class */ (function (_super) {
    __extends(Iticr500ApplicationJson, _super);
    function Iticr500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Iticr500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Iticr500ApplicationJson.prototype, "errorDescription", void 0);
    return Iticr500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Iticr500ApplicationJson = Iticr500ApplicationJson;
var Iticr502ApplicationJsonErrorEnum;
(function (Iticr502ApplicationJsonErrorEnum) {
    Iticr502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Iticr502ApplicationJsonErrorEnum = exports.Iticr502ApplicationJsonErrorEnum || (exports.Iticr502ApplicationJsonErrorEnum = {}));
var Iticr502ApplicationJsonErrorDescriptionEnum;
(function (Iticr502ApplicationJsonErrorDescriptionEnum) {
    Iticr502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Iticr502ApplicationJsonErrorDescriptionEnum = exports.Iticr502ApplicationJsonErrorDescriptionEnum || (exports.Iticr502ApplicationJsonErrorDescriptionEnum = {}));
var Iticr502ApplicationJson = /** @class */ (function (_super) {
    __extends(Iticr502ApplicationJson, _super);
    function Iticr502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Iticr502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Iticr502ApplicationJson.prototype, "errorDescription", void 0);
    return Iticr502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Iticr502ApplicationJson = Iticr502ApplicationJson;
var Iticr503ApplicationJsonErrorEnum;
(function (Iticr503ApplicationJsonErrorEnum) {
    Iticr503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Iticr503ApplicationJsonErrorEnum = exports.Iticr503ApplicationJsonErrorEnum || (exports.Iticr503ApplicationJsonErrorEnum = {}));
var Iticr503ApplicationJsonErrorDescriptionEnum;
(function (Iticr503ApplicationJsonErrorDescriptionEnum) {
    Iticr503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Iticr503ApplicationJsonErrorDescriptionEnum = exports.Iticr503ApplicationJsonErrorDescriptionEnum || (exports.Iticr503ApplicationJsonErrorDescriptionEnum = {}));
var Iticr503ApplicationJson = /** @class */ (function (_super) {
    __extends(Iticr503ApplicationJson, _super);
    function Iticr503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Iticr503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Iticr503ApplicationJson.prototype, "errorDescription", void 0);
    return Iticr503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Iticr503ApplicationJson = Iticr503ApplicationJson;
var Iticr504ApplicationJsonErrorEnum;
(function (Iticr504ApplicationJsonErrorEnum) {
    Iticr504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Iticr504ApplicationJsonErrorEnum = exports.Iticr504ApplicationJsonErrorEnum || (exports.Iticr504ApplicationJsonErrorEnum = {}));
var Iticr504ApplicationJsonErrorDescriptionEnum;
(function (Iticr504ApplicationJsonErrorDescriptionEnum) {
    Iticr504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Iticr504ApplicationJsonErrorDescriptionEnum = exports.Iticr504ApplicationJsonErrorDescriptionEnum || (exports.Iticr504ApplicationJsonErrorDescriptionEnum = {}));
var Iticr504ApplicationJson = /** @class */ (function (_super) {
    __extends(Iticr504ApplicationJson, _super);
    function Iticr504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Iticr504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Iticr504ApplicationJson.prototype, "errorDescription", void 0);
    return Iticr504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Iticr504ApplicationJson = Iticr504ApplicationJson;
var IticrRequest = /** @class */ (function (_super) {
    __extends(IticrRequest, _super);
    function IticrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", IticrRequestBody)
    ], IticrRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", IticrSecurity)
    ], IticrRequest.prototype, "security", void 0);
    return IticrRequest;
}(utils_1.SpeakeasyBase));
exports.IticrRequest = IticrRequest;
var IticrResponse = /** @class */ (function (_super) {
    __extends(IticrResponse, _super);
    function IticrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], IticrResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], IticrResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Iticr400ApplicationJson)
    ], IticrResponse.prototype, "iticr400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Iticr401ApplicationJson)
    ], IticrResponse.prototype, "iticr401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Iticr404ApplicationJson)
    ], IticrResponse.prototype, "iticr404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Iticr500ApplicationJson)
    ], IticrResponse.prototype, "iticr500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Iticr502ApplicationJson)
    ], IticrResponse.prototype, "iticr502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Iticr503ApplicationJson)
    ], IticrResponse.prototype, "iticr503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Iticr504ApplicationJson)
    ], IticrResponse.prototype, "iticr504ApplicationJSONObject", void 0);
    return IticrResponse;
}(utils_1.SpeakeasyBase));
exports.IticrResponse = IticrResponse;
