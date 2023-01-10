package shared

// DescribeFpgaImageAttributeResultFpgaImageAttribute
// Information about the attribute.
type DescribeFpgaImageAttributeResultFpgaImageAttribute struct {
	Description     map[string]interface{}
	FpgaImageID     map[string]interface{}
	LoadPermissions map[string]interface{}
	Name            map[string]interface{}
	ProductCodes    map[string]interface{}
}

type DescribeFpgaImageAttributeResult struct {
	FpgaImageAttribute *DescribeFpgaImageAttributeResultFpgaImageAttribute
}
