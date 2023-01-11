import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SitemapsReportOnly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=in_configuration" })
  inConfiguration: number;

  @SpeakeasyMetadata({ data: "json, name=out_of_configuration" })
  outOfConfiguration: number;
}
