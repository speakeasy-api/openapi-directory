import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksPercentilesItem } from "./linkspercentilesitem";



export class LinksPercentiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=percentiles", elemType: LinksPercentilesItem })
  percentiles: LinksPercentilesItem[];
}
