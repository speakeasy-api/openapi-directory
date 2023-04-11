import { SpeakeasyBase } from "../../../internal/utils";
import { DomainStatusEnum } from "./domainstatusenum";
/**
 * Success
 */
export declare class GetDomainResponse extends SpeakeasyBase {
    createdTime: Date;
    domainArn: string;
    domainId: string;
    domainStatus: DomainStatusEnum;
    name: string;
    tags?: Record<string, string>;
}
