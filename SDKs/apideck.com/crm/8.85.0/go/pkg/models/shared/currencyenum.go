package shared

type CurrencyEnum string

const (
	CurrencyEnumUnknownCurrency CurrencyEnum = "UNKNOWN_CURRENCY"
	CurrencyEnumAed             CurrencyEnum = "AED"
	CurrencyEnumAfn             CurrencyEnum = "AFN"
	CurrencyEnumAll             CurrencyEnum = "ALL"
	CurrencyEnumAmd             CurrencyEnum = "AMD"
	CurrencyEnumAng             CurrencyEnum = "ANG"
	CurrencyEnumAoa             CurrencyEnum = "AOA"
	CurrencyEnumArs             CurrencyEnum = "ARS"
	CurrencyEnumAud             CurrencyEnum = "AUD"
	CurrencyEnumAwg             CurrencyEnum = "AWG"
	CurrencyEnumAzn             CurrencyEnum = "AZN"
	CurrencyEnumBam             CurrencyEnum = "BAM"
	CurrencyEnumBbd             CurrencyEnum = "BBD"
	CurrencyEnumBdt             CurrencyEnum = "BDT"
	CurrencyEnumBgn             CurrencyEnum = "BGN"
	CurrencyEnumBhd             CurrencyEnum = "BHD"
	CurrencyEnumBif             CurrencyEnum = "BIF"
	CurrencyEnumBmd             CurrencyEnum = "BMD"
	CurrencyEnumBnd             CurrencyEnum = "BND"
	CurrencyEnumBob             CurrencyEnum = "BOB"
	CurrencyEnumBov             CurrencyEnum = "BOV"
	CurrencyEnumBrl             CurrencyEnum = "BRL"
	CurrencyEnumBsd             CurrencyEnum = "BSD"
	CurrencyEnumBtn             CurrencyEnum = "BTN"
	CurrencyEnumBwp             CurrencyEnum = "BWP"
	CurrencyEnumByr             CurrencyEnum = "BYR"
	CurrencyEnumBzd             CurrencyEnum = "BZD"
	CurrencyEnumCad             CurrencyEnum = "CAD"
	CurrencyEnumCdf             CurrencyEnum = "CDF"
	CurrencyEnumChe             CurrencyEnum = "CHE"
	CurrencyEnumChf             CurrencyEnum = "CHF"
	CurrencyEnumChw             CurrencyEnum = "CHW"
	CurrencyEnumClf             CurrencyEnum = "CLF"
	CurrencyEnumClp             CurrencyEnum = "CLP"
	CurrencyEnumCny             CurrencyEnum = "CNY"
	CurrencyEnumCop             CurrencyEnum = "COP"
	CurrencyEnumCou             CurrencyEnum = "COU"
	CurrencyEnumCrc             CurrencyEnum = "CRC"
	CurrencyEnumCuc             CurrencyEnum = "CUC"
	CurrencyEnumCup             CurrencyEnum = "CUP"
	CurrencyEnumCve             CurrencyEnum = "CVE"
	CurrencyEnumCzk             CurrencyEnum = "CZK"
	CurrencyEnumDjf             CurrencyEnum = "DJF"
	CurrencyEnumDkk             CurrencyEnum = "DKK"
	CurrencyEnumDop             CurrencyEnum = "DOP"
	CurrencyEnumDzd             CurrencyEnum = "DZD"
	CurrencyEnumEgp             CurrencyEnum = "EGP"
	CurrencyEnumErn             CurrencyEnum = "ERN"
	CurrencyEnumEtb             CurrencyEnum = "ETB"
	CurrencyEnumEur             CurrencyEnum = "EUR"
	CurrencyEnumFjd             CurrencyEnum = "FJD"
	CurrencyEnumFkp             CurrencyEnum = "FKP"
	CurrencyEnumGbp             CurrencyEnum = "GBP"
	CurrencyEnumGel             CurrencyEnum = "GEL"
	CurrencyEnumGhs             CurrencyEnum = "GHS"
	CurrencyEnumGip             CurrencyEnum = "GIP"
	CurrencyEnumGmd             CurrencyEnum = "GMD"
	CurrencyEnumGnf             CurrencyEnum = "GNF"
	CurrencyEnumGtq             CurrencyEnum = "GTQ"
	CurrencyEnumGyd             CurrencyEnum = "GYD"
	CurrencyEnumHkd             CurrencyEnum = "HKD"
	CurrencyEnumHnl             CurrencyEnum = "HNL"
	CurrencyEnumHrk             CurrencyEnum = "HRK"
	CurrencyEnumHtg             CurrencyEnum = "HTG"
	CurrencyEnumHuf             CurrencyEnum = "HUF"
	CurrencyEnumIdr             CurrencyEnum = "IDR"
	CurrencyEnumIls             CurrencyEnum = "ILS"
	CurrencyEnumInr             CurrencyEnum = "INR"
	CurrencyEnumIqd             CurrencyEnum = "IQD"
	CurrencyEnumIrr             CurrencyEnum = "IRR"
	CurrencyEnumIsk             CurrencyEnum = "ISK"
	CurrencyEnumJmd             CurrencyEnum = "JMD"
	CurrencyEnumJod             CurrencyEnum = "JOD"
	CurrencyEnumJpy             CurrencyEnum = "JPY"
	CurrencyEnumKes             CurrencyEnum = "KES"
	CurrencyEnumKgs             CurrencyEnum = "KGS"
	CurrencyEnumKhr             CurrencyEnum = "KHR"
	CurrencyEnumKmf             CurrencyEnum = "KMF"
	CurrencyEnumKpw             CurrencyEnum = "KPW"
	CurrencyEnumKrw             CurrencyEnum = "KRW"
	CurrencyEnumKwd             CurrencyEnum = "KWD"
	CurrencyEnumKyd             CurrencyEnum = "KYD"
	CurrencyEnumKzt             CurrencyEnum = "KZT"
	CurrencyEnumLak             CurrencyEnum = "LAK"
	CurrencyEnumLbp             CurrencyEnum = "LBP"
	CurrencyEnumLkr             CurrencyEnum = "LKR"
	CurrencyEnumLrd             CurrencyEnum = "LRD"
	CurrencyEnumLsl             CurrencyEnum = "LSL"
	CurrencyEnumLtl             CurrencyEnum = "LTL"
	CurrencyEnumLvl             CurrencyEnum = "LVL"
	CurrencyEnumLyd             CurrencyEnum = "LYD"
	CurrencyEnumMad             CurrencyEnum = "MAD"
	CurrencyEnumMdl             CurrencyEnum = "MDL"
	CurrencyEnumMga             CurrencyEnum = "MGA"
	CurrencyEnumMkd             CurrencyEnum = "MKD"
	CurrencyEnumMmk             CurrencyEnum = "MMK"
	CurrencyEnumMnt             CurrencyEnum = "MNT"
	CurrencyEnumMop             CurrencyEnum = "MOP"
	CurrencyEnumMro             CurrencyEnum = "MRO"
	CurrencyEnumMur             CurrencyEnum = "MUR"
	CurrencyEnumMvr             CurrencyEnum = "MVR"
	CurrencyEnumMwk             CurrencyEnum = "MWK"
	CurrencyEnumMxn             CurrencyEnum = "MXN"
	CurrencyEnumMxv             CurrencyEnum = "MXV"
	CurrencyEnumMyr             CurrencyEnum = "MYR"
	CurrencyEnumMzn             CurrencyEnum = "MZN"
	CurrencyEnumNad             CurrencyEnum = "NAD"
	CurrencyEnumNgn             CurrencyEnum = "NGN"
	CurrencyEnumNio             CurrencyEnum = "NIO"
	CurrencyEnumNok             CurrencyEnum = "NOK"
	CurrencyEnumNpr             CurrencyEnum = "NPR"
	CurrencyEnumNzd             CurrencyEnum = "NZD"
	CurrencyEnumOmr             CurrencyEnum = "OMR"
	CurrencyEnumPab             CurrencyEnum = "PAB"
	CurrencyEnumPen             CurrencyEnum = "PEN"
	CurrencyEnumPgk             CurrencyEnum = "PGK"
	CurrencyEnumPhp             CurrencyEnum = "PHP"
	CurrencyEnumPkr             CurrencyEnum = "PKR"
	CurrencyEnumPln             CurrencyEnum = "PLN"
	CurrencyEnumPyg             CurrencyEnum = "PYG"
	CurrencyEnumQar             CurrencyEnum = "QAR"
	CurrencyEnumRon             CurrencyEnum = "RON"
	CurrencyEnumRsd             CurrencyEnum = "RSD"
	CurrencyEnumRub             CurrencyEnum = "RUB"
	CurrencyEnumRwf             CurrencyEnum = "RWF"
	CurrencyEnumSar             CurrencyEnum = "SAR"
	CurrencyEnumSbd             CurrencyEnum = "SBD"
	CurrencyEnumScr             CurrencyEnum = "SCR"
	CurrencyEnumSdg             CurrencyEnum = "SDG"
	CurrencyEnumSek             CurrencyEnum = "SEK"
	CurrencyEnumSgd             CurrencyEnum = "SGD"
	CurrencyEnumShp             CurrencyEnum = "SHP"
	CurrencyEnumSll             CurrencyEnum = "SLL"
	CurrencyEnumSos             CurrencyEnum = "SOS"
	CurrencyEnumSrd             CurrencyEnum = "SRD"
	CurrencyEnumSsp             CurrencyEnum = "SSP"
	CurrencyEnumStd             CurrencyEnum = "STD"
	CurrencyEnumSvc             CurrencyEnum = "SVC"
	CurrencyEnumSyp             CurrencyEnum = "SYP"
	CurrencyEnumSzl             CurrencyEnum = "SZL"
	CurrencyEnumThb             CurrencyEnum = "THB"
	CurrencyEnumTjs             CurrencyEnum = "TJS"
	CurrencyEnumTmt             CurrencyEnum = "TMT"
	CurrencyEnumTnd             CurrencyEnum = "TND"
	CurrencyEnumTop             CurrencyEnum = "TOP"
	CurrencyEnumTrc             CurrencyEnum = "TRC"
	CurrencyEnumTry             CurrencyEnum = "TRY"
	CurrencyEnumTtd             CurrencyEnum = "TTD"
	CurrencyEnumTwd             CurrencyEnum = "TWD"
	CurrencyEnumTzs             CurrencyEnum = "TZS"
	CurrencyEnumUah             CurrencyEnum = "UAH"
	CurrencyEnumUgx             CurrencyEnum = "UGX"
	CurrencyEnumUsd             CurrencyEnum = "USD"
	CurrencyEnumUsn             CurrencyEnum = "USN"
	CurrencyEnumUss             CurrencyEnum = "USS"
	CurrencyEnumUyi             CurrencyEnum = "UYI"
	CurrencyEnumUyu             CurrencyEnum = "UYU"
	CurrencyEnumUzs             CurrencyEnum = "UZS"
	CurrencyEnumVef             CurrencyEnum = "VEF"
	CurrencyEnumVnd             CurrencyEnum = "VND"
	CurrencyEnumVuv             CurrencyEnum = "VUV"
	CurrencyEnumWst             CurrencyEnum = "WST"
	CurrencyEnumXaf             CurrencyEnum = "XAF"
	CurrencyEnumXag             CurrencyEnum = "XAG"
	CurrencyEnumXau             CurrencyEnum = "XAU"
	CurrencyEnumXba             CurrencyEnum = "XBA"
	CurrencyEnumXbb             CurrencyEnum = "XBB"
	CurrencyEnumXbc             CurrencyEnum = "XBC"
	CurrencyEnumXbd             CurrencyEnum = "XBD"
	CurrencyEnumXcd             CurrencyEnum = "XCD"
	CurrencyEnumXdr             CurrencyEnum = "XDR"
	CurrencyEnumXof             CurrencyEnum = "XOF"
	CurrencyEnumXpd             CurrencyEnum = "XPD"
	CurrencyEnumXpf             CurrencyEnum = "XPF"
	CurrencyEnumXpt             CurrencyEnum = "XPT"
	CurrencyEnumXts             CurrencyEnum = "XTS"
	CurrencyEnumXxx             CurrencyEnum = "XXX"
	CurrencyEnumYer             CurrencyEnum = "YER"
	CurrencyEnumZar             CurrencyEnum = "ZAR"
	CurrencyEnumZmk             CurrencyEnum = "ZMK"
	CurrencyEnumZmw             CurrencyEnum = "ZMW"
	CurrencyEnumBtc             CurrencyEnum = "BTC"
)
