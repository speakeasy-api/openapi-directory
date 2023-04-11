import { SpeakeasyBase } from "../../../internal/utils";
import { DomainEntry } from "./domainentry";
import { RegisteredDomainDelegationInfo } from "./registereddomaindelegationinfo";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";
/**
 * Describes a domain where you are storing recordsets.
 */
export declare class Domain extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    domainEntries?: DomainEntry[];
    location?: ResourceLocation;
    name?: string;
    registeredDomainDelegationInfo?: RegisteredDomainDelegationInfo;
    resourceType?: ResourceTypeEnum;
    supportCode?: string;
    tags?: Tag[];
}
