import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeFpgaImageAttributeResultFpgaImageAttribute
/** 
 * Information about the attribute.
**/
export class DescribeFpgaImageAttributeResultFpgaImageAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  fpgaImageId?: Record<string, any>;

  @SpeakeasyMetadata()
  loadPermissions?: Record<string, any>;

  @SpeakeasyMetadata()
  name?: Record<string, any>;

  @SpeakeasyMetadata()
  productCodes?: Record<string, any>;
}


export class DescribeFpgaImageAttributeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fpgaImageAttribute?: DescribeFpgaImageAttributeResultFpgaImageAttribute;
}
