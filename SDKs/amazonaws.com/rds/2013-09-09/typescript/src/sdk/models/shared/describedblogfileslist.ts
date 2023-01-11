import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDbLogFilesList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  lastWritten?: number;

  @SpeakeasyMetadata()
  logFileName?: string;

  @SpeakeasyMetadata()
  size?: number;
}
