import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReturningProduction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "json, name=passingUsage" })
  passingUsage?: number;

  @SpeakeasyMetadata({ data: "json, name=percentPPA" })
  percentPPA?: number;

  @SpeakeasyMetadata({ data: "json, name=percentPassingPPA" })
  percentPassingPPA?: number;

  @SpeakeasyMetadata({ data: "json, name=percentReceivingPPA" })
  percentReceivingPPA?: number;

  @SpeakeasyMetadata({ data: "json, name=percentRushingPPA" })
  percentRushingPPA?: number;

  @SpeakeasyMetadata({ data: "json, name=receivingUsage" })
  receivingUsage?: number;

  @SpeakeasyMetadata({ data: "json, name=rushingUsage" })
  rushingUsage?: number;

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: number;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "json, name=totalPPA" })
  totalPPA?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPassingPPA" })
  totalPassingPPA?: number;

  @SpeakeasyMetadata({ data: "json, name=totalReceivingPPA" })
  totalReceivingPPA?: number;

  @SpeakeasyMetadata({ data: "json, name=totalRushingPPA" })
  totalRushingPPA?: number;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: number;
}
