import { SpeakeasyBase } from "../../../internal/utils";
import { LinksTopDomainsSamples } from "./linkstopdomainssamples";
export declare class LinksTopDomains extends SpeakeasyBase {
    domain: string;
    followLinks: number;
    followSamples: LinksTopDomainsSamples[];
    nofollowLinks: number;
    nofollowSamples: LinksTopDomainsSamples[];
    uniqueFollowLinks: number;
    uniqueNofollowLinks: number;
}
