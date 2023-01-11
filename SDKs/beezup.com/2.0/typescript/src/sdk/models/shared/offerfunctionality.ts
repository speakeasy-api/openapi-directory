import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OfferFunctionality extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=functionalityCode" })
  functionalityCode: string;

  @SpeakeasyMetadata({ data: "json, name=maxValueInteger" })
  maxValueInteger?: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=unlimited" })
  unlimited: boolean;
}
