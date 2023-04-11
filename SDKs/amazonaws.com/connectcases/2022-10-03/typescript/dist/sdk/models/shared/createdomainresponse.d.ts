import { SpeakeasyBase } from "../../../internal/utils";
import { DomainStatusEnum } from "./domainstatusenum";
/**
 * Success
 */
export declare class CreateDomainResponse extends SpeakeasyBase {
    domainArn: string;
    domainId: string;
    domainStatus: DomainStatusEnum;
}
