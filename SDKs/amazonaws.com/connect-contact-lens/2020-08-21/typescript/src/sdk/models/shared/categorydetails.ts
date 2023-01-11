import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PointOfInterest } from "./pointofinterest";



export class CategoryDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PointsOfInterest", elemType: PointOfInterest })
  pointsOfInterest?: PointOfInterest[];
}
