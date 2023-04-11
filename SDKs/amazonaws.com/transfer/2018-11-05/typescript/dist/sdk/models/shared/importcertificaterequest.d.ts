import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateUsageTypeEnum } from "./certificateusagetypeenum";
import { Tag } from "./tag";
export declare class ImportCertificateRequest extends SpeakeasyBase {
    activeDate?: Date;
    certificate: string;
    certificateChain?: string;
    description?: string;
    inactiveDate?: Date;
    privateKey?: string;
    tags?: Tag[];
    usage: CertificateUsageTypeEnum;
}
