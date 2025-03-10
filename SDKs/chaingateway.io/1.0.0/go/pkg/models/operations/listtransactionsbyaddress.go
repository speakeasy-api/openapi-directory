// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type ListtransactionsbyaddressRequest struct {
	// account address
	Address string `pathParam:"style=simple,explode=false,name=address"`
	// Current page, see description for more informatiosn how pagination works
	Page string `pathParam:"style=simple,explode=false,name=page"`
}

type Listtransactionsbyaddress200ApplicationJSONDataMetaAccountedFor struct {
	Address  *string  `json:"address,omitempty"`
	Decimals *float64 `json:"decimals,omitempty"`
	Name     *string  `json:"name,omitempty"`
	Petname  *string  `json:"petname,omitempty"`
	Source   *string  `json:"source,omitempty"`
	Symbol   *string  `json:"symbol,omitempty"`
	Tags     *string  `json:"tags,omitempty"`
}

type Listtransactionsbyaddress200ApplicationJSONDataMetaNamedTo0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf struct {
	Count      *float64 `json:"count,omitempty"`
	IsContract *bool    `json:"isContract,omitempty"`
	Name       *string  `json:"name,omitempty"`
	Tags       *string  `json:"tags,omitempty"`
}

type Listtransactionsbyaddress200ApplicationJSONDataMetaNamedTo struct {
	Zeroxa57bd00134b2850b2a1c55860c9e9ea100fdd6cf *Listtransactionsbyaddress200ApplicationJSONDataMetaNamedTo0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf `json:"0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf,omitempty"`
}

type Listtransactionsbyaddress200ApplicationJSONDataMetaUnNamedFrom struct {
	Zerox0039b625b1d8632c7a0057c964ec58a9f39789d3 *float64 `json:"0x0039b625b1d8632c7a0057c964ec58a9f39789d3,omitempty"`
	Zerox005fde5294199d5c3eb5eb7a6e51954123b74b1c *float64 `json:"0x005fde5294199d5c3eb5eb7a6e51954123b74b1c,omitempty"`
	Zerox006e920000ec97e58900b61e00800010005aa831 *float64 `json:"0x006e920000ec97e58900b61e00800010005aa831,omitempty"`
	Zerox00a2aebc7e233cd2ffe5ab5856f90f0ad2fa3ccd *float64 `json:"0x00a2aebc7e233cd2ffe5ab5856f90f0ad2fa3ccd,omitempty"`
	Zerox00dee1f836998bcc736022f314df906588d44808 *float64 `json:"0x00dee1f836998bcc736022f314df906588d44808,omitempty"`
	Zerox042523db4f3effc33d2742022b2490258494f8b3 *float64 `json:"0x042523db4f3effc33d2742022b2490258494f8b3,omitempty"`
	Zerox065e3dbafcb2c26a978720f9eb4bce6ad9d644a1 *float64 `json:"0x065e3dbafcb2c26a978720f9eb4bce6ad9d644a1,omitempty"`
	Zerox09e0781a47e9fd2b6258be09bd074f42022b9760 *float64 `json:"0x09e0781a47e9fd2b6258be09bd074f42022b9760,omitempty"`
	Zerox0d0b3f21d7c90d0b957aa6acbc993621311208e4 *float64 `json:"0x0d0b3f21d7c90d0b957aa6acbc993621311208e4,omitempty"`
	Zerox177b8ebe208cb71da818b6b8814c946c027240cd *float64 `json:"0x177b8ebe208cb71da818b6b8814c946c027240cd,omitempty"`
	Zerox1c8f6a5f009e051cab9c3851ca2da2c936b2775a *float64 `json:"0x1c8f6a5f009e051cab9c3851ca2da2c936b2775a,omitempty"`
	Zerox26bce6ecb5b10138e4bf14ac0ffcc8727fef3b2e *float64 `json:"0x26bce6ecb5b10138e4bf14ac0ffcc8727fef3b2e,omitempty"`
	Zerox26fd09c8b44af53df38a9bad41d5abc55a1786af *float64 `json:"0x26fd09c8b44af53df38a9bad41d5abc55a1786af,omitempty"`
	Zerox30a1b724c9dfe2e12a19ed84878312d199d1519e *float64 `json:"0x30a1b724c9dfe2e12a19ed84878312d199d1519e,omitempty"`
	Zerox33cef21eb6068ebfcf70c7404efb8aaa08cad388 *float64 `json:"0x33cef21eb6068ebfcf70c7404efb8aaa08cad388,omitempty"`
	Zerox3443006ed920730005d88267c49f77abcde749af *float64 `json:"0x3443006ed920730005d88267c49f77abcde749af,omitempty"`
	Zerox346c802df3404bec2f265603db28b815321251ee *float64 `json:"0x346c802df3404bec2f265603db28b815321251ee,omitempty"`
	Zerox34ec9e3a1ac200ea58744ced891015152130e400 *float64 `json:"0x34ec9e3a1ac200ea58744ced891015152130e400,omitempty"`
	Zerox3b25d8e0801df1264a3d3a5f0bb79bbc292a09fb *float64 `json:"0x3b25d8e0801df1264a3d3a5f0bb79bbc292a09fb,omitempty"`
	Zerox3fb530b53036b5d8de892ad1eda14a576a22e6d6 *float64 `json:"0x3fb530b53036b5d8de892ad1eda14a576a22e6d6,omitempty"`
	Zerox3fbaea01b228368e67ca40d8cb195018fd095318 *float64 `json:"0x3fbaea01b228368e67ca40d8cb195018fd095318,omitempty"`
	Zerox431b5a84acc1297eda88259f300262f1bc3a74f3 *float64 `json:"0x431b5a84acc1297eda88259f300262f1bc3a74f3,omitempty"`
	Zerox479bc00624e58398f4cf59d78884d12fb515790a *float64 `json:"0x479bc00624e58398f4cf59d78884d12fb515790a,omitempty"`
	Zerox50efbf12580138bc263c95757826df4e24eb81c9 *float64 `json:"0x50efbf12580138bc263c95757826df4e24eb81c9,omitempty"`
	Zerox5a243879d1a43f48042c33bbc8051c69756f67d4 *float64 `json:"0x5a243879d1a43f48042c33bbc8051c69756f67d4,omitempty"`
	Zerox6046945c5b5ef5933b8e73a98a6ad7bf3e031df7 *float64 `json:"0x6046945c5b5ef5933b8e73a98a6ad7bf3e031df7,omitempty"`
	Zerox60b86af869f23aeb552fb7f3cabd11b829f6ab2f *float64 `json:"0x60b86af869f23aeb552fb7f3cabd11b829f6ab2f,omitempty"`
	Zerox72bb8c608c4ea4a887266985e680a04c056f5b2a *float64 `json:"0x72bb8c608c4ea4a887266985e680a04c056f5b2a,omitempty"`
	Zerox76dd32063b2899a59f6e15dbc474a160cc922751 *float64 `json:"0x76dd32063b2899a59f6e15dbc474a160cc922751,omitempty"`
	Zerox76e40d0a69fd81826b5eb7d18145626d46eafdef *float64 `json:"0x76e40d0a69fd81826b5eb7d18145626d46eafdef,omitempty"`
	Zerox77eb9084ce8168901bcb11f14f02a7aab36fcd0c *float64 `json:"0x77eb9084ce8168901bcb11f14f02a7aab36fcd0c,omitempty"`
	Zerox8e2400a8822fe2da5a8c52b7f7b412acb49813c8 *float64 `json:"0x8e2400a8822fe2da5a8c52b7f7b412acb49813c8,omitempty"`
	Zerox8e8f818d3371f797a2db7edb32803607c8b3c6a9 *float64 `json:"0x8e8f818d3371f797a2db7edb32803607c8b3c6a9,omitempty"`
	Zerox91aae0aafd9d2d730111b395c6871f248d7bd728 *float64 `json:"0x91aae0aafd9d2d730111b395c6871f248d7bd728,omitempty"`
	Zerox92824d144c6543f70a649b2c3e7596612375fd4d *float64 `json:"0x92824d144c6543f70a649b2c3e7596612375fd4d,omitempty"`
	Zerox93f635372008b7c5d770aaa6ff313454c8dc498c *float64 `json:"0x93f635372008b7c5d770aaa6ff313454c8dc498c,omitempty"`
	Zerox9aab3f81604c683a1a0d14019fbfe15bef7aa1ee *float64 `json:"0x9aab3f81604c683a1a0d14019fbfe15bef7aa1ee,omitempty"`
	Zeroxa5a13f62ce1113838e0d9b4559b8caf5f76463c0 *float64 `json:"0xa5a13f62ce1113838e0d9b4559b8caf5f76463c0,omitempty"`
	Zeroxa6807d794411d9a80bc435dfc4cda0ba0ddde979 *float64 `json:"0xa6807d794411d9a80bc435dfc4cda0ba0ddde979,omitempty"`
	Zeroxa855d1198c67839e596b9a5d7c46f8ea31cfefde *float64 `json:"0xa855d1198c67839e596b9a5d7c46f8ea31cfefde,omitempty"`
	Zeroxb0804b228c1c1449cdc94dd16fc8910421f45df1 *float64 `json:"0xb0804b228c1c1449cdc94dd16fc8910421f45df1,omitempty"`
	Zeroxb2088e2ec5e3599554a70cbb17c0ef1aac70dc78 *float64 `json:"0xb2088e2ec5e3599554a70cbb17c0ef1aac70dc78,omitempty"`
	Zeroxb30b1dabe7451fe6646a15631d7537df64b193ce *float64 `json:"0xb30b1dabe7451fe6646a15631d7537df64b193ce,omitempty"`
	Zeroxba4ff5f9d6508000b7fd0035bd616aaec070384f *float64 `json:"0xba4ff5f9d6508000b7fd0035bd616aaec070384f,omitempty"`
	Zeroxbbad96336943a36e3e292d973b3382dd0ba4d1ef *float64 `json:"0xbbad96336943a36e3e292d973b3382dd0ba4d1ef,omitempty"`
	Zeroxc11099d3cd9686158db0a40e88267e7b1740958c *float64 `json:"0xc11099d3cd9686158db0a40e88267e7b1740958c,omitempty"`
	Zeroxd03154dbc4ae6beafa79f7ae6d99c12ce58f5b64 *float64 `json:"0xd03154dbc4ae6beafa79f7ae6d99c12ce58f5b64,omitempty"`
	Zeroxe58e5ed4544f58831a84c18178b911a5957ada08 *float64 `json:"0xe58e5ed4544f58831a84c18178b911a5957ada08,omitempty"`
	Zeroxeca2e2d894d19778939bd4dfc34d2a3c45e96456 *float64 `json:"0xeca2e2d894d19778939bd4dfc34d2a3c45e96456,omitempty"`
	Zeroxf0475a1f184f062d1eee88f0d79ec4eb2795d4f0 *float64 `json:"0xf0475a1f184f062d1eee88f0d79ec4eb2795d4f0,omitempty"`
	Zeroxf5e322fd6fadbef5d14eaf0f45a809c00739d1e7 *float64 `json:"0xf5e322fd6fadbef5d14eaf0f45a809c00739d1e7,omitempty"`
	Zeroxfb9779477e5b4834bf2bc02dd29b97b344d0f700 *float64 `json:"0xfb9779477e5b4834bf2bc02dd29b97b344d0f700,omitempty"`
	Zeroxff82bf5238637b7e5e345888bab9cd99f5ebe331 *float64 `json:"0xff82bf5238637b7e5e345888bab9cd99f5ebe331,omitempty"`
}

type Listtransactionsbyaddress200ApplicationJSONDataMetaUnNamedTo struct {
	Zerox0000000000007f150bd6f54c40a34d7c3d5e9f56 *float64 `json:"0x0000000000007f150bd6f54c40a34d7c3d5e9f56,omitempty"`
	Zerox000000000035b5e5ad9019092c665357240f594e *float64 `json:"0x000000000035b5e5ad9019092c665357240f594e,omitempty"`
	Zerox0000000000a84d1a9b0063a910315c7ffa9cd248 *float64 `json:"0x0000000000a84d1a9b0063a910315c7ffa9cd248,omitempty"`
	Zerox0077732907bfc6208933cfd2a51afb8f33ca5958 *float64 `json:"0x0077732907bfc6208933cfd2a51afb8f33ca5958,omitempty"`
	Zerox1cedc0f3af8f9841b0a1f5c1a4ddc6e1a1629074 *float64 `json:"0x1cedc0f3af8f9841b0a1f5c1a4ddc6e1a1629074,omitempty"`
	Zerox26c541f5e1c8eab0f6f0943bb1c8843ab18c4b0d *float64 `json:"0x26c541f5e1c8eab0f6f0943bb1c8843ab18c4b0d,omitempty"`
	Zerox388c818ca8b9251b393131c08a736a67ccb19297 *float64 `json:"0x388c818ca8b9251b393131c08a736a67ccb19297,omitempty"`
	Zerox3e2766167aa2acb097c311d5a2e9eb17cad38b06 *float64 `json:"0x3e2766167aa2acb097c311d5a2e9eb17cad38b06,omitempty"`
	Zerox4a137fd5e7a256ef08a7de531a17d0be0cc7b6b6 *float64 `json:"0x4a137fd5e7a256ef08a7de531a17d0be0cc7b6b6,omitempty"`
	Zerox5050e08626c499411b5d0e0b5af0e83d3fd82edf *float64 `json:"0x5050e08626c499411b5d0e0b5af0e83d3fd82edf,omitempty"`
	Zerox535b918f3724001fd6fb52fcc6cbc220592990a3 *float64 `json:"0x535b918f3724001fd6fb52fcc6cbc220592990a3,omitempty"`
	Zerox57c1e0c2adf6eecdb135bcf9ec5f23b319be2c94 *float64 `json:"0x57c1e0c2adf6eecdb135bcf9ec5f23b319be2c94,omitempty"`
	Zerox665179031a86561ac845f43d6b6341cffbcea040 *float64 `json:"0x665179031a86561ac845f43d6b6341cffbcea040,omitempty"`
	Zerox7d9da47e83b82a52a2b45353cdad735afb43e6f0 *float64 `json:"0x7d9da47e83b82a52a2b45353cdad735afb43e6f0,omitempty"`
	Zerox81153f0889ab398c4acb42cb58b565a5392bba95 *float64 `json:"0x81153f0889ab398c4acb42cb58b565a5392bba95,omitempty"`
	Zerox87b3f3c934a13c779e100a5d6e6d7ef577e86671 *float64 `json:"0x87b3f3c934a13c779e100a5d6e6d7ef577e86671,omitempty"`
	Zerox87d9da48db6e1f925cb67d3b7d2a292846c24cf7 *float64 `json:"0x87d9da48db6e1f925cb67d3b7d2a292846c24cf7,omitempty"`
	Zerox98c3d3183c4b8a650614ad179a1a98be0a8d6b8e *float64 `json:"0x98c3d3183c4b8a650614ad179a1a98be0a8d6b8e,omitempty"`
	Zeroxa69babef1ca67a37ffaf7a485dfff3382056e78c *float64 `json:"0xa69babef1ca67a37ffaf7a485dfff3382056e78c,omitempty"`
	Zeroxbeefbabeea323f07c59926295205d3b7a17e8638 *float64 `json:"0xbeefbabeea323f07c59926295205d3b7a17e8638,omitempty"`
	Zeroxcfc7e96be27d836b034b37132052549611341108 *float64 `json:"0xcfc7e96be27d836b034b37132052549611341108,omitempty"`
	Zeroxe94f1fa4f27d9d288ffea234bb62e1fbc086ca0c *float64 `json:"0xe94f1fa4f27d9d288ffea234bb62e1fbc086ca0c,omitempty"`
	Zeroxeb00c80f00ca1585000000b84f00940000ed40e5 *float64 `json:"0xeb00c80f00ca1585000000b84f00940000ed40e5,omitempty"`
	Zeroxebec795c9c8bbd61ffc14a6662944748f299cacf *float64 `json:"0xebec795c9c8bbd61ffc14a6662944748f299cacf,omitempty"`
	Zeroxeee27662c2b8eba3cd936a23f039f3189633e4c8 *float64 `json:"0xeee27662c2b8eba3cd936a23f039f3189633e4c8,omitempty"`
	Zeroxf828add1619bfb64712654076490b2609ae6d774 *float64 `json:"0xf828add1619bfb64712654076490b2609ae6d774,omitempty"`
	Zeroxffd22b84fb1d46ef74ed6530b2635be61340f347 *float64 `json:"0xffd22b84fb1d46ef74ed6530b2635be61340f347,omitempty"`
}

type Listtransactionsbyaddress200ApplicationJSONDataMeta struct {
	AccountedFor *Listtransactionsbyaddress200ApplicationJSONDataMetaAccountedFor `json:"accountedFor,omitempty"`
	Chain        *string                                                          `json:"chain,omitempty"`
	Client       *float64                                                         `json:"client,omitempty"`
	ClientID     *float64                                                         `json:"clientId,omitempty"`
	Finalized    *float64                                                         `json:"finalized,omitempty"`
	FirstBlock   *float64                                                         `json:"first_block,omitempty"`
	LastBlock    *string                                                          `json:"last_block,omitempty"`
	NamedFrom    []interface{}                                                    `json:"namedFrom,omitempty"`
	NamedTo      *Listtransactionsbyaddress200ApplicationJSONDataMetaNamedTo      `json:"namedTo,omitempty"`
	NetworkID    *float64                                                         `json:"networkId,omitempty"`
	Ripe         *float64                                                         `json:"ripe,omitempty"`
	Staging      *float64                                                         `json:"staging,omitempty"`
	UnNamedFrom  *Listtransactionsbyaddress200ApplicationJSONDataMetaUnNamedFrom  `json:"unNamedFrom,omitempty"`
	UnNamedTo    *Listtransactionsbyaddress200ApplicationJSONDataMetaUnNamedTo    `json:"unNamedTo,omitempty"`
	Unripe       *float64                                                         `json:"unripe,omitempty"`
}

type Listtransactionsbyaddress200ApplicationJSONDataTransactionsReceipt struct {
	ContractAddress   *string       `json:"contractAddress,omitempty"`
	EffectiveGasPrice *float64      `json:"effectiveGasPrice,omitempty"`
	GasUsed           *float64      `json:"gasUsed,omitempty"`
	Logs              []interface{} `json:"logs,omitempty"`
	Status            *float64      `json:"status,omitempty"`
}

type Listtransactionsbyaddress200ApplicationJSONDataTransactions struct {
	BlockHash            *string                                                             `json:"blockHash,omitempty"`
	BlockNumber          *float64                                                            `json:"blockNumber,omitempty"`
	CompressedTx         *string                                                             `json:"compressedTx,omitempty"`
	Date                 *string                                                             `json:"date,omitempty"`
	Encoding             *string                                                             `json:"encoding,omitempty"`
	Ether                *float64                                                            `json:"ether,omitempty"`
	EtherGasCost         *float64                                                            `json:"etherGasCost,omitempty"`
	From                 *string                                                             `json:"from,omitempty"`
	Function             *string                                                             `json:"function,omitempty"`
	Gas                  *float64                                                            `json:"gas,omitempty"`
	GasCost              *float64                                                            `json:"gasCost,omitempty"`
	GasPrice             *float64                                                            `json:"gasPrice,omitempty"`
	GasUsed              *float64                                                            `json:"gasUsed,omitempty"`
	HasToken             *float64                                                            `json:"hasToken,omitempty"`
	Hash                 *string                                                             `json:"hash,omitempty"`
	Input                *string                                                             `json:"input,omitempty"`
	IsError              *float64                                                            `json:"isError,omitempty"`
	MaxFeePerGas         *float64                                                            `json:"maxFeePerGas,omitempty"`
	MaxPriorityFeePerGas *float64                                                            `json:"maxPriorityFeePerGas,omitempty"`
	Receipt              *Listtransactionsbyaddress200ApplicationJSONDataTransactionsReceipt `json:"receipt,omitempty"`
	Timestamp            *float64                                                            `json:"timestamp,omitempty"`
	To                   *string                                                             `json:"to,omitempty"`
	Traces               []interface{}                                                       `json:"traces,omitempty"`
	TransactionIndex     *float64                                                            `json:"transactionIndex,omitempty"`
	Value                *float64                                                            `json:"value,omitempty"`
}

type Listtransactionsbyaddress200ApplicationJSONData struct {
	CurrentPage  *float64                                                      `json:"current_page,omitempty"`
	MaxPages     *float64                                                      `json:"max_pages,omitempty"`
	Meta         *Listtransactionsbyaddress200ApplicationJSONDataMeta          `json:"meta,omitempty"`
	Transactions []Listtransactionsbyaddress200ApplicationJSONDataTransactions `json:"transactions,omitempty"`
}

// Listtransactionsbyaddress200ApplicationJSON - ListTransactionsByAddress
type Listtransactionsbyaddress200ApplicationJSON struct {
	Data    *Listtransactionsbyaddress200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                          `json:"message,omitempty"`
	Ok      *bool                                            `json:"ok,omitempty"`
	Status  *float64                                         `json:"status,omitempty"`
}

type ListtransactionsbyaddressResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int
	RawResponse *http.Response
	// ListTransactionsByAddress
	Listtransactionsbyaddress200ApplicationJSONObject *Listtransactionsbyaddress200ApplicationJSON
}
