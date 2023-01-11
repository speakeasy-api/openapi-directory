import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListStreamConsumersInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamARN" })
  streamARN: string;

  @SpeakeasyMetadata({ data: "json, name=StreamCreationTimestamp" })
  streamCreationTimestamp?: Date;
}
