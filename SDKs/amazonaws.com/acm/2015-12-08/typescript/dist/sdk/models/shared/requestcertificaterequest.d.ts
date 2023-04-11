import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateOptions } from "./certificateoptions";
import { DomainValidationOption } from "./domainvalidationoption";
import { KeyAlgorithmEnum } from "./keyalgorithmenum";
import { Tag } from "./tag";
import { ValidationMethodEnum } from "./validationmethodenum";
export declare class RequestCertificateRequest extends SpeakeasyBase {
    certificateAuthorityArn?: string;
    domainName: string;
    domainValidationOptions?: DomainValidationOption[];
    idempotencyToken?: string;
    keyAlgorithm?: KeyAlgorithmEnum;
    options?: CertificateOptions;
    subjectAlternativeNames?: string[];
    tags?: Tag[];
    validationMethod?: ValidationMethodEnum;
}
