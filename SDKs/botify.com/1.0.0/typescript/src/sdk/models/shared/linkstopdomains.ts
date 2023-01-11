import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksTopDomainsSamples } from "./linkstopdomainssamples";



export class LinksTopDomains extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=follow_links" })
  followLinks: number;

  @SpeakeasyMetadata({ data: "json, name=follow_samples", elemType: LinksTopDomainsSamples })
  followSamples: LinksTopDomainsSamples[];

  @SpeakeasyMetadata({ data: "json, name=nofollow_links" })
  nofollowLinks: number;

  @SpeakeasyMetadata({ data: "json, name=nofollow_samples", elemType: LinksTopDomainsSamples })
  nofollowSamples: LinksTopDomainsSamples[];

  @SpeakeasyMetadata({ data: "json, name=unique_follow_links" })
  uniqueFollowLinks: number;

  @SpeakeasyMetadata({ data: "json, name=unique_nofollow_links" })
  uniqueNofollowLinks: number;
}
